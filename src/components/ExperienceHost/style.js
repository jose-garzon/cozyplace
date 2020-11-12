// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  spacing,
  border,
  shadows,
  fonts,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const BlockExp = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: ${spacing.space2};

  ${media.mobile} {
    padding: 0;
  }

  h1 {
    ${media.mobile} {
      margin: ${spacing.space3} 0;
      text-align: center;
    }
  }
`;

export const DescriptionExp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;

  ${media.tablet} {
    width: 90%;
  }

  ${media.mobile} {
    width: 80%;
  }
`;

export const DetailsHost = styled.article`
  max-width: 600px;
  min-height: 800px;
  padding: ${spacing.space3};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideSoftShadow};

  ${media.tablet} {
    max-width: 100%;
    min-height: 600px;
    margin-bottom: ${spacing.space2};
  }

  ${media.mobile} {
    padding: ${spacing.space1};
    min-height: 500px;
  }

  h3 {
    font-size: ${fonts.h2};
    font-weight: ${fonts.bold};
  }

  p {
    line-height: 25px;
  }
`;
