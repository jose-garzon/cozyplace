// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  shadows,
  border,
  spacing,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 ${spacing.space2};
  padding: 5px;
  border-radius: 50%;
  border: ${border.border};
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.secondaryBackgroundColor};
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  ${media.mobile} {
    margin: 0 ${spacing.space1};
  }

  /* this rule is the style to the click action  */
  &:active {
    box-shadow: ${shadows.innerShadow};
  }

  &:hover {
    border: 1px solid #fb8f1d;
    box-shadow: none;
  }

  /* this lines validate if type is search to display a diferente background an size */
  ${(props) =>
    props.alt === 'search' &&
    css`
      width: 60px;
      height: 60px;
      margin: 0;
      position: absolute;
      right: 0;
      padding: 15px;
      ${colors.mainBackgroundColor};

      ${media.mobile} {
        margin: 0;
      }
    `};

  ${(props) =>
    props.alt === 'close' &&
    css`
      margin: 0;
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 1;
      padding: 8px;
    `};

  ${(props) =>
    props.alt === 'plus' &&
    css`
      padding: ${spacing.space2};
      width: 80px;
      height: 80px;
    `};

  ${(props) =>
    props.alt === 'emptyHeart' &&
    css`
      position: absolute;
      margin: ${spacing.space2};
      right: 0;
      bottom: 0;
      z-index: 2;

      ${media.mobile} {
        margin: 0;
        right: 10px;
        bottom: 10px;
      }
    `};

  ${(props) =>
    props.alt === 'favoriteHeart' &&
    css`
      position: absolute;
      margin: ${spacing.space2};
      right: 0;
      bottom: 0;
      z-index: 2;

      ${media.mobile} {
        margin: 0;
        right: 10px;
        bottom: 10px;
      }
    `};

  ${(props) =>
    props.alt === 'heartBroken' &&
    css`
      position: absolute;
      margin: ${spacing.space2};
      right: 0;
      bottom: 0;
      z-index: 2;

      ${media.mobile} {
        margin: 0;
        right: 10px;
        bottom: 10px;
      }
    `};
`;
