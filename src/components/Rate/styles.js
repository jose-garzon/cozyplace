// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledRating = styled.div`
  position: relative;
  z-index: 2;
`;

export const Star = styled.label`
  margin-right: 3px;

  img {
    ${media.mobile} {
      width: 25px;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;
