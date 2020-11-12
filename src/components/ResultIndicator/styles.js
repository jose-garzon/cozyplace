// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import {
  border,
  colors,
  shadows,
  spacing,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Indicator = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 3;
  padding: ${spacing.space1} ${spacing.space2};
  color: ${colors.titleColor};
  box-shadow: ${shadows.outsideShadow};
  border-radius: ${border.borderRadiusSmall};
  pointer-events: none;
  transform: translateY(-150%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  background: ${colors.secondaryBackgroundColor};

  ${media.mobile} {
    width: 200px;
    transform: translateX(-100%);
  }

  ${(props) =>
    props.show === true &&
    css`
      opacity: 1;
    `}

  ${(props) =>
    props.actionType === false &&
    css`
      color: ${colors.backgroundColor};
      ${colors.mainBackgroundColor}
    `}
`;
