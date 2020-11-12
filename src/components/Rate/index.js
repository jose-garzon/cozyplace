// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import styles and images
import starIcon from '../../assets/images/Star.svg';
import StarInactive from '../../assets/images/StarInactive.svg';
import { Star, Input, StyledRating } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the rating component.
// This are the starts that rate places and experiences.
export const Rate = ({ rate, setrating }) => {
  return (
    <StyledRating>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <Star key={ratingValue}>
            <Input
              id={i}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setrating(ratingValue)}
            />
            <img
              src={ratingValue <= rate ? starIcon : StarInactive}
              alt={`rating star ${i}`}
            />
          </Star>
        );
      })}
    </StyledRating>
  );
};
