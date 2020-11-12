// ------------------------------ import libraries
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import { colors, spacing, shadows, fonts } from './Variables';
import { media } from './MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const LinkStyled = styled(Link)`
  margin: 0 ${spacing.space1};
  text-transform: uppercase;
  font-weight: ${fonts.bold};
  font-size: ${fonts.small};
  color: ${colors.titleColor};
  text-shadow: ${shadows.textShadow};
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  ${(props) =>
    props.nav &&
    css`
      ${media.mobile} {
        display: none;
      }
    `};
`;
