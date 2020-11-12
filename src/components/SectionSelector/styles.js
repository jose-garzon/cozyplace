// ------------------------------ import libraries
import styled, { css } from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------ import variables
import {
  border,
  colors,
  fonts,
  shadows,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//

export const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.space3};

  ${media.tablet} {
    margin: 0;
  }
  ${media.mobile} {
    flex-direction: column;
    margin: 0;
    text-align: center;
  }

  h3 {
    position: relative;
    margin: 0 ${spacing.space3};
    padding: ${spacing.space1} ${spacing.space2};
    color: ${colors.titleColor};
    font-weight: ${fonts.bold};
    border-radius: ${border.borderRadiusSmall};
    border: 1px solid ${colors.titleColor};
    transition: 0.3s;
    cursor: pointer;
    outline: none;

    ${media.mobile} {
      margin-bottom: ${spacing.space2};
    }

    &:hover {
      transform: scale(1.05);
    }

    &:focus {
      color: ${colors.backgroundColor};
      background: ${colors.titleColor};
      box-shadow: ${shadows.outsideShadow};
    }
  }
`;
