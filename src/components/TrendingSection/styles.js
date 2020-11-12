// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Container = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.innerShadow};
  outline: none;
  ${colors.mainBackgroundColor};

  ${media.tablet} {
    padding: ${spacing.space2};
    overflow: auto;
  }

  h1 {
    margin: 0;
    margin-bottom: ${spacing.space2};
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: ${spacing.space2};

  ${media.tablet} {
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(1, 300px);
    /* display: flex; */
  }
`;
