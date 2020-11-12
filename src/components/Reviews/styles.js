// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ReviewContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.space2};

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
`;
