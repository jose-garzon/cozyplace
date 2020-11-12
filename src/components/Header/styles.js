// ------------------------------ import libraries
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import {
  spacing,
  shadows,
  colors,
} from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.space1} ${spacing.space3};

  ${media.mobile} {
    padding: ${spacing.space3};
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuProfile = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  &:hover ul {
    display: flex;
    flex-direction: column;
  }
  ul:hover {
    display: flex;
  }
  ul:hover {
    display: flex;
  }
  ul Button:hover,
  ul {
    display: flex;
  }
  ul {
    display: none;
    list-style: none;
    padding: 0;
    padding-top: 16px;
    margin-top: 0;
    position: absolute;
    transform: translateY(200%);
  }
  ul Button {
    padding: 0.3em 1.25em;
    margin-left: 0;
    ${colors.mainBackgroundColor};
  }
`;

export const Logo = styled.img`
  width: 80px;
`;

export const LinkedLogo = styled(Link)`
  outline: none;
  transition: 0.3s;

  &:hover {
    transform: scale(0.95);
  }
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  background: ${colors.backgroundColor};
  box-shadow: ${shadows.outsideShadow};
  cursor: pointer;
  /* margin-bottom: 100px */
`;
