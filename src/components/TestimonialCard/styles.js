// ------------------------------ import libraries
import styled, { css } from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------ import variables
import {
  colors,
  border,
  spacing,
  shadows,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  width: 620px;
  position: relative;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  padding: ${spacing.space3} ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;

  ${media.mobile} {
    width: 100%;
    flex-direction: column;
  }

  ${(props) =>
    props.show === true &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};

  ${media.mobile} {
    width: 120px;
    height: 120px;
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing.space2} 0 ${spacing.space2} ${spacing.space3};
  color: ${colors.backgroundColor};

  ${media.mobile} {
    padding: ${spacing.space2} 0 0 0;
  }

  p {
    ${media.mobile} {
      font-size: 14px;
      margin-bottom: 0;
    }
  }

  h1 {
    margin: 0 0 5px 0;
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};

    ${media.mobile} {
      font-size: ${fonts.h2};
    }
  }
`;
