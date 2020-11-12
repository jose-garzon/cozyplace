// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const MainStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: ${spacing.space2};
  width: 80%;
  height: 900px;
  margin: 0 auto;
  margin-top: ${spacing.space4};

  ${media.tablet} {
    width: 80%;
    height: 1200px;
    grid-template-columns: 1.2fr 1fr 1fr;
    grid-template-rows: repeat(7, 1fr);
  }

  ${media.mobile} {
    height: 2500px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: ${spacing.space3};
  }
`;
