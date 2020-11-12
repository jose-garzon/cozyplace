// ------------------------------ import libraries
import styled from 'styled-components';
import { media } from '../../global-styles/MediaQueries';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledSection = styled.section`
  height: 400px;
  position: relative;
  margin: 0 ${spacing.space4};

  ${media.mobile} {
    margin: 0 ${spacing.space2};
  }
`;
