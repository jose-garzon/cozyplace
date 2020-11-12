// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  border,
  spacing,
  shadows,
  fonts,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  padding: ${spacing.space2} ${spacing.space3};
  text-shadow: ${shadows.textShadow};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
  text-align: center;

  ${media.mobile} {
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: ${fonts.h2};
    color: ${colors.backgroundColor};
  }

  button {
    margin: 0;
  }
`;
