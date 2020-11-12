// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Testimonial } from '../Testimonial';
import { TestimonialCard } from '../TestimonialCard';
import mockupTestimonial from './testimonial.json';

// ------------------------------ import styles and images
import { StyledSection } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the testimonial section. It has the user comments of the app.
// When the user click any Testimonial appears the card with the comment of the person clicked.

export const TestimonialSection = () => {
  const { data } = mockupTestimonial;
  return (
    <StyledSection>
      <h1>Testimonials</h1>
      <Testimonial data={data[0]} left={0} top={15} />
      <Testimonial data={data[1]} left={65} top={10} />
      <Testimonial data={data[2]} left={10} top={60} />
      <Testimonial data={data[3]} left={55} top={65} />
      {window.innerWidth > 400 ? (
        <>
          <Testimonial data={data[4]} left={88} top={65} />
          <Testimonial data={data[5]} left={35} top={20} />
        </>
      ) : null}
      <TestimonialCard />
    </StyledSection>
  );
};
