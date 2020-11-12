// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  fonts,
  shadows,
  spacing,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  ${media.tablet}{
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  padding-top: 1em;
  font-weight: ${fonts.normal};
  font-size: ${fonts.bigTitle};
  line-height: 70px;
  text-align: center;
  text-shadow: ${shadows.textShadow};
  color: ${colors.titleColor};
  ${media.tablet} {
    font-size: 3em;
  }
`;

export const DescriptText = styled.p`
  margin: 1em auto;
  width: 35%;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  ${media.tablet}{
    width: 50%;
  }
`;

export const CategorySection = styled.section`
  margin: 2em auto;
  height: 40%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const SelectionSection = styled.section`
  display: flex;
  justify-content: space-around;
  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    margin-bottom: ${spacing.space2};
  }
`;

export const TextChoice = styled.p`
  width: 50%;
  text-align: center;
  ${media.tablet} {
    margin-bottom: ${spacing.space3};
  }
`;

