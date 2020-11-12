// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { SearchReview } from '../SearchReview';
import { ReviewCard } from '../ReviewCard';

// ------------------------------ import styles and images
import { ReviewContainer } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//

export const Reviews = () => {
  return (
    <div>
      <SearchReview />
      <ReviewContainer>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ReviewContainer>
    </div>
  );
};
