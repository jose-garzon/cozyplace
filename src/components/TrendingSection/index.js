// ------------------------------ import libraries
import React, { useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';
import { LoadingCard } from '../LoadingCard';
import { NotFoundSearch } from '../NotFoundSearch';

// ------------------------------ import styles and images
import { Container, Layout } from './styles';

// -------- import redux actions
import { setTrending } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this sections has the trendings experiences.
// it also shows the results of the experiences search.
// only shows 4 cards.

export const TrendingSection = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { searchExperiences, loading } = useSelector(
    (state) => state.experiencesReducer,
  );

  useEffect(() => {
    dispatch(setTrending());
  }, []);

  const notFound =
    loading === false && searchExperiences.length === 0;

  return (
    <Container tabIndex="0" ref={ref}>
      <h1> Trending stories </h1>
      <Layout>
        {loading
          ? [...Array(4)].map((card, i = 0) => {
              i++;
              return <LoadingCard position={i} page="landing" />;
            })
          : searchExperiences.slice(0, 4).map((experience, i = 0) => {
              i++;
              return (
                <ExperienceCard
                  position={i}
                  page="landing"
                  key={experience._id}
                  {...experience}
                />
              );
            })}
        {notFound ? <NotFoundSearch /> : null}
      </Layout>
    </Container>
  );
});
