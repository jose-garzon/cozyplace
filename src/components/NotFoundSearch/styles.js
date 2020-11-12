// ------------------------------ import libraries
import styled, { css } from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------ import variables
import {
  colors,
  border,
  shadows,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const NotFound = styled.section`
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  background-color: ${colors.backgroundColor};
  box-shadow: ${shadows.outsideShadow};

  ${media.tablet} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }

  ${(props) =>
    props.page === 'home' &&
    css`
      grid-column: 1 / span 4;
      grid-row: 1 / span 2;

      ${media.tablet} {
        grid-column: 1 / span 3;
        grid-row: 1 / span 2;
      }

      ${media.mobile} {
        text-align: center;
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
      }
    `}
`;
