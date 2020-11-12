// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { shadows, spacing, border, colors } from './Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const InputText = styled.input`
  height: 40px;
  margin: ${spacing.space1} 0;
  padding-left: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerShadow};
  outline: none;

  &:focus {
    box-shadow: ${shadows.innerSoftShadow};
  }
`;

export const InputDate = styled.input`
  width: 60%;
  margin-top: ${spacing.space2};
  padding: ${spacing.space1} ${spacing.space3};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideShadow};
  border: ${border.border};
  background: ${colors.secondaryBackgroundColor};
  outline: none;
  transition: 0.3s;

  &:focus {
    box-shadow: ${shadows.innerShadow};
  }
`;
