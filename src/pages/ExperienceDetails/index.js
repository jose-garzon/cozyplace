// ------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperienceHost } from '../../components/ExperienceHost';
import { Footer } from '../../components/Footer';
import heroPic from '../../assets/images/heroPicture.jpg';

// -------- import redux actions
import { setCurrentExperience } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the page that shows the experiences details
// it is dynamic and depends of the given experience id

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const current = useSelector(
    (state) => state.experiencesReducer.current,
  );
  console.log(current);

  const experienceImg = current ? current.image : heroPic;

  useLayoutEffect(() => {
    dispatch(setCurrentExperience(id));
  }, []);

  return (
    <>
      <Hero image={experienceImg} />
      <ExperienceHost />
      <Footer />
    </>
  );
};
