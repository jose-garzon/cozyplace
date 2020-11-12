// ------------------------------ import libraries
import styled, { keyframes, css } from 'styled-components';

// ------------------------------ import variables
import { border, colors } from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
const breath = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50%{
    opacity: .5;
  }
`;

export const Loading = styled.div`
  background-color: #c4c4c4;
  border-radius: ${border.borderRadiusSmall};
  animation: ${breath} 2s infinite linear;

  ${(props) =>
    props.position === 'undefinedundefined' &&
    css`
      height: 400px;

      ${media.tablet} {
        height: 300px;
      }

      ${media.mobile} {
        height: 200px;
      }
    `}

  /* grid styles for the home grid  */
  ${(props) =>
    props.position === 'home1' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;

      ${media.tablet} {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
  ${(props) =>
    props.position === 'home2' &&
    css`
      grid-column: 2 / span 2;
      grid-row: 1 / span 1;

      ${media.tablet} {
        grid-column: 2 / span 2;
        grid-row: 1 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home3' &&
    css`
      grid-column: 4 / span 1;
      grid-row: 1 / span 1;

      ${media.tablet} {
        grid-column: 2 / span 2;
        grid-row: 2 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home4' &&
    css`
      grid-column: 2 / span 1;
      grid-row: 2 / span 2;

      ${media.tablet} {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home5' &&
    css`
      grid-column: 3 / span 2;
      grid-row: 2 / span 1;

      ${media.tablet} {
        grid-column: 1 / span 2;
        grid-row: 4 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home6' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;

      ${media.tablet} {
        grid-column: 3 / span 1;
        grid-row: 3 / span 2;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home7' &&
    css`
      grid-column: 3 / span 1;
      grid-row: 3 / span 1;

      ${media.tablet} {
        grid-column: 1 / span 1;
        grid-row: 5 / span 2;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home8' &&
    css`
      grid-column: 4 / span 1;
      grid-row: 3 / span 2;

      ${media.tablet} {
        grid-column: 2 / span 2;
        grid-row: 5 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home9' &&
    css`
      grid-column: 1 / span 2;
      grid-row: 4 / span 1;

      ${media.tablet} {
        grid-column: 2 / span 2;
        grid-row: 6 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}
      ${(props) =>
    props.position === 'home10' &&
    css`
      grid-column: 3 / span 1;
      grid-row: 4 / span 1;

      ${media.tablet} {
        grid-column: 1 / span 3;
        grid-row: 7 / span 1;
      }

      ${media.mobile} {
        width: 100%;
        height: 100%;
        grid-column: auto / auto;
        grid-row: auto / auto;
      }
    `}

      /* grid styles for the landing grid  */
      ${(props) =>
    props.position === 'landing1' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;
    `}
      ${(props) =>
    props.position === 'landing2' &&
    css`
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'landing3' &&
    css`
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'landing4' &&
    css`
      grid-column: 2 / span 2;
      grid-row: 2 / span 1;
    `};
`;
