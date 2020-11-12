// ------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';
import { LoadingCard } from '../LoadingCard';
import { NotFoundSearch } from '../NotFoundSearch';

// ------------------------------ import styles and images
import { MainStyled } from './styles';

// -------- import redux actions
import { getAllExperiences } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the layout to show the experiences in home page.

export const ExperiencesLayout = () => {
  const dispatch = useDispatch();
  const { searchExperiences, loading } = useSelector(
    (state) => state.experiencesReducer,
  );

  useLayoutEffect(() => {
    dispatch(getAllExperiences());
  }, []);

  const notFound =
    loading === false && searchExperiences.length === 0;

  return (
    <MainStyled>
      {loading
        ? [...Array(10)].map((card, i = 0) => {
            i++;
            return <LoadingCard key={i} position={i} page="home" />;
          })
        : searchExperiences.slice(0, 10).map((experience, i = 0) => {
            i++;
            return (
              <ExperienceCard
                position={i}
                page="home"
                key={experience._id}
                {...experience}
              />
            );
          })}
      {notFound ? <NotFoundSearch page="home" /> : null}
    </MainStyled>
  );
};
