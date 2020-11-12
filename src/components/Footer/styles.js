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
export const StyledFooter = styled.footer`
  margin-top: ${spacing.space4};
  padding: ${spacing.space3};
  border-radius: ${border.borderRadiusBig};
  text-align: center;
  box-shadow: ${shadows.innerShadow};

  ${media.mobile} {
    margin: ${spacing.space2};
    padding: ${spacing.space2};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${spacing.space2};
  justify-content: space-between;
`;

export const Rights = styled.div`
  width: 40%;
  text-align: left;

  ${media.mobile} {
    width: 100%;
  }

  img {
    width: ${spacing.space4};
  }
`;

export const ListsGroup = styled.div`
  display: flex;
  ${media.mobile} {
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  list-style: none;

  ${media.mobile} {
    padding: 0;
  }

  li {
    margin-bottom: ${spacing.space1};
  }

  li:first-child {
    margin-bottom: ${spacing.space3};
    color: transparent;
    text-transform: uppercase;
    font-weight: ${fonts.bold};
    ${colors.mainBackgroundColor};
    -webkit-background-clip: text;
  }
`;
