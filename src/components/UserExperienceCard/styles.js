// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  border,
  shadows,
  spacing,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  position: relative;
  display: block;
  /* left: ${(props) => props.left || '0'}; */
  /* top: ${(props) => props.top || '0'}; */
  width: 200px;
  height: 350px;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  overflow: hidden;
  margin: 20px auto;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  position: absolute;
  min-width: 60%;
  max-width: 100%;
  z-index: 1;
  bottom: 0;
  padding-left: ${spacing.space2};
  padding-bottom: ${spacing.space1};
  border-radius: 0 ${border.borderRadiusSmall} 0 0;
  background-color: ${colors.backgroundColor};

  p {
    margin: ${spacing.space1} 0 0 0;
    font-weight: ${fonts.bold};
    color: ${colors.titleColor};
  }
`;
