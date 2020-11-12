// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import { colors, spacing, shadows, border, fonts } from './Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Button = styled.button`
  padding: ${spacing.space1} ${spacing.space3};
  margin-left: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  text-transform: uppercase;
  font-weight: ${fonts.bold};
  color: ${colors.titleColor};
  box-shadow: ${shadows.outsideShadow};
  cursor: pointer;
  outline: none;
  background: ${colors.secondaryBackgroundColor};
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: ${shadows.innerShadow};
  }
  /* this validate the color of background */
  /* if has the prop main display background orange */
  ${(props) =>
    props.main &&
    css`
      ${colors.mainBackgroundColor};
    `};

  ${(props) =>
    props.big &&
    css`
      margin: none;
      padding: ${spacing.space2} ${spacing.space4};
      ${colors.mainBackgroundColor};
    `};

  ${(props) =>
    props.submit &&
    css`
      align-self: center;
      width: 80%;
      margin: 0;
      margin-top: ${spacing.space3};
    `};
`;
