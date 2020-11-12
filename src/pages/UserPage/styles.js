// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { Colors, Spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  border-radius: ${Spacing.borderRadius};
  background-color: ${Colors.secondColor};
`;

export const Link = styled.a`
  width: 100%;
  padding: ${Spacing.sectionSpacing};
  text-align: center;
  color: ${Colors.mainColor};
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    color: ${Colors.lightColor};
    background-color: ${Colors.mainColor};
  }
`;
