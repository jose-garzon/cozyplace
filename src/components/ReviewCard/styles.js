// ------------------------------ import libraries
import styled from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

// ------------------------------ import variables
import {
  spacing,
  shadows,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.article`
  padding: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideShadow};

  ${media.mobile} {
    margin-bottom: ${spacing.space2};
  }

  article {
    display: flex;
    margin-bottom: ${spacing.space1};
  }

  div {
    flex-direction: column;
    margin-left: ${spacing.space2};

    div {
      margin: 0;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 10px;
    align-self: flex-start;
    justify-self: center;
    position: relative;
  }

  h3::after {
    content: '';
    background-color: #fb8f1d;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
  }

  p {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
`;
