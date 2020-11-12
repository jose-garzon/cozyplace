// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperienceForm } from '../../components/ExperienceForm';
import { Footer } from '../../components/Footer';
import { ResulIndicator } from '../../components/ResultIndicator';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export default () => {
  return (
    <>
      <ResulIndicator />
      <Hero />
      <ExperienceForm />
      <Footer />
    </>
  );
};
