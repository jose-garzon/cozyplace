// ------------------------------ import libraries
import styled from 'styled-components';
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
  max-width: 350px;
  display: flex;
  align-items: center;
  padding: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.innerShadow};
  ${colors.mainBackgroundColor};

  ${media.mobile} {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: ${colors.backgroundColor};
  box-shadow: ${shadows.outsideShadow};

  ${media.mobile} {
    width: 70px;
    height: 70px;
  }
`;

export const HostName = styled.div`
  margin-left: ${spacing.space3};

  ${media.mobile} {
    margin-left: ${spacing.space2};
  }

  h2 {
    margin: 0;
    margin-bottom: ${spacing.space1};
    font-weight: ${fonts.bold};
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
`;
