// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  border,
  shadows,
  spacing,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const CardStyled = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  outline: none;

  ${media.tablet} {
    height: 300px;
  }

  ${media.mobile} {
    height: 200px;
  }

  h3 {
    margin-bottom: ${spacing.space3};

    ${media.mobile} {
      margin-bottom: ${spacing.space1};
    }
  }
`;
