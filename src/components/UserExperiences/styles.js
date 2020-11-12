// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//

export const ExperienceGrid = styled.div`
  margin: ${spacing.space3} auto;
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.space3};

  ${media.tablet} {
    max-width: 90%;
  }

  ${media.mobile} {
    max-width: 80%;
    grid-template-columns: 1fr;
  }
`;
