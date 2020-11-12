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
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ProfileContainer = styled.section`
  max-width: 1024px;
  transform: translateY(-50%);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 90%;
  }

  ${media.mobile} {
    transform: translateY(-25%);
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background: ${colors.backgroundColor};
  box-shadow: ${shadows.outsideShadow};
`;

export const Description = styled.div`
  margin-left: ${spacing.space3};

  ${media.mobile} {
    margin: 0;
    margin-top: ${spacing.space2};
  }

  p {
    margin: 0;
    margin-top: ${spacing.space3};

    ${media.mobile} {
      text-align: center;
    }
  }
`;

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.backgroundColor};

  ${media.mobile} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: ${fonts.bigTitle};
    margin: 0;

    ${media.tablet} {
      font-size: 35px;
    }

    ${media.mobile} {
      font-size: ${fonts.h1};
      margin: ${spacing.space1} 0;
    }
  }

  button {
    ${media.mobile} {
      margin: 0;
    }
  }
`;

export const UserFom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${media.mobile} {
    margin-top: ${spacing.space2};
    flex-direction: column;
  }

  div {
    position: relative;
    width: 80%;

    ${media.mobile} {
      width: 100%;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 15%;

    ${media.mobile} {
      position: relative;
      margin: 0;
    }
  }
`;

export const UserInputs = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.mobile} {
    margin: 0 auto;
    margin-top: ${spacing.space2};
    flex-direction: column;
  }

  input {
    margin-right: ${spacing.space2};
    flex-grow: 1;

    ${media.mobile} {
      margin-right: 0;
    }
  }
`;

export const TextArea = styled.textarea`
  height: 60px;
  width: 100%;
  margin-top: ${spacing.space3};
  padding: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerShadow};
  outline: none;
  font-family: ${fonts.family};

  ${media.mobile} {
    margin-top: ${spacing.space1};
    margin-bottom: ${spacing.space2};
  }
`;

export const ImageInput = styled.label`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.backgroundColor};
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    display: none;
  }
`;
