// ------------------------------ import libraries
import { createGlobalStyle } from 'styled-components';

// ------------------------------ import variables
import { colors, fonts } from './Variables';

export const GlobalStyles = createGlobalStyle`
  /********** import font **********/
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  /********** style restart **********/
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
  padding: 0;
  margin: 0;
  font-family: ${fonts.family};
  font-weight: ${fonts.normal};
  color: ${colors.textColor};
  background-color: ${colors.backgroundColor};
  }

  h1 {
    font-size: ${fonts.h1};
    color: ${colors.titleColor};
  }

  h2 {
    font-size: ${fonts.h2};
    color: ${colors.titleColor};
  }

  h3 {
    font-size: ${fonts.h3};
    color: ${colors.titleColor};
  }

  p {
    font-size: ${fonts.p};
  }

  small {
    font-size: ${fonts.small};
  }
`;
