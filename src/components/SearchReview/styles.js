// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  fonts,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const SearchBarStyled = styled.section`
  width: 100%;
  margin: ${spacing.space2} 0;
  text-align: center;
`;

export const Title = styled.p`
  position: relative;
  color: ${colors.titleColor};
  font-weight: ${fonts.bold};
  text-transform: uppercase;
  text-shadow: ${shadows.textShadow};

  ::after {
    content: '';
    position: absolute;
    width: 10%;
    height: 2px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.titleColor};
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  font-size: ${fonts.h3};
  color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  border: ${border.border};
  box-shadow: ${shadows.innerShadow};
  outline: none;

  &:focus {
    border: 2px solid #fb8f1d;
    box-shadow: ${shadows.innerSoftShadow};
  }
`;
