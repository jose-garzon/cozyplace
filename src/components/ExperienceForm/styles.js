// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
  fonts,
} from '../../global-styles/Variables';

import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;

  ${media.tablet} {
    margin-top: ${spacing.space2};
    width: 90%;
  }

  ${media.mobile} {
    width: 80%;
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const MainInputs = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    width: 100%;
  }

  input {
    font-size: ${fonts.h3};
    width: 100%;
    align-self: flex-start;

    ${media.tablet} {
      margin: ${spacing.space3} 0;
    }

    &:first-child {
      ${media.mobile} {
        margin: ${spacing.space1} 0;
      }
    }
  }
`;

export const ExpForm = styled.form`
  textarea {
    width: 100%;
    height: 300px;
    margin-top: ${spacing.space3};
    padding: ${spacing.space2};
    font-family: ${fonts.family};
    font-size: ${fonts.p};
    border: ${border.border};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
    outline: none;
  }
`;

export const Rating = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 0 ${spacing.space2};
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};

  p {
    font-size: ${fonts.h2};
    color: ${colors.backgroundColor};
    margin-right: ${spacing.space2};

    ${media.mobile} {
      margin-right: ${spacing.space1};
      font-size: ${fonts.h3};
    }
  }
`;

export const Pics = styled.div`
  display: grid;
  place-items: center;
  width: 400px;
  height: 300px;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerSoftShadow};
  overflow: hidden;

  ${media.tablet} {
    width: 100%;
    margin-top: ${spacing.space3};
  }

  img[pic] {
    margin-left: 5%;
    width: 90%;
    height: 95%;
    object-fit: cover;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.textShadow};

    ${media.tablet} {
      height: 250px;
    }
  }

  input {
    display: none;
  }
`;

export const Dropdown = styled.select`
  width: 30%;
  padding: ${spacing.space1};
  padding-left: ${spacing.space1};
  font-size: ${fonts.p};
  border-radius: ${border.borderRadiusSmall};
  border: ${border.border};
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.secondaryBackgroundColor};
  outline: none;
  transition: box-shadow 0.3s;

  ${media.desktop} {
    width: 45%;
    margin: ${spacing.space2} 0;
  }

  ${media.mobile} {
    width: 100%;
  }

  &:focus {
    font-weight: ${fonts.bold};
    box-shadow: ${shadows.innerShadow};
  }

  option {
    background: ${colors.backgroundColor};
  }
`;

export const SubmitButtons = styled.div`
  text-align: center;
  margin-top: ${spacing.space2};

  ${media.desktop} {
    margin: ${spacing.space2} 0;
  }
`;
