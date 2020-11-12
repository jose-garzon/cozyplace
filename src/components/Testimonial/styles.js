// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledTestimonial = styled.button`
  position: absolute;
  cursor: pointer;
  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || '50px'};
  border: none;
  background: none;
  outline: none;

  &:focus {
    transform: scale(0.9);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: ${shadows.outsideShadow};
    object-fit: cover;
  }

  &:focus img {
    border: 2px solid #fb8f1d;
    box-shadow: ${shadows.innerSoftShadow};
  }
`;
