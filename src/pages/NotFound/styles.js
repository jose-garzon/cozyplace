// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  border,
  fonts,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Styled404 = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  grid-template-rows: auto 1fr auto;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    margin-right: ${spacing.space1};
    color: transparent;
    font-size: 300px;
    font-weight: ${fonts.normal};
    text-align: center;
    ${colors.mainBackgroundColor};
    -webkit-background-clip: text;
  }

  ${media.tablet} {
    flex-direction: column;

    h1 {
      margin: 0;
      font-size: 180px;
    }
  }
`;

export const Description = styled.div`
  padding: ${spacing.space4};
  text-align: center;
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerShadow};
  background: ${colors.secondaryBackgroundColor};

  p {
    font-weight: ${fonts.bold};
    color: ${colors.titleColor};
  }

  p:first-child {
    font-size: ${fonts.h1};
    margin: 0;
  }

  div {
    margin-top: ${spacing.space3};
  }

  ${media.tablet} {
    padding: ${spacing.space3};
    margin-top: ${spacing.space2};
  }
`;
