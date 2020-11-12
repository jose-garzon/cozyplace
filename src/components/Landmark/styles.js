// ------------------------------ import libraries
import styled from 'styled-components';

export const LandmarkIcon = styled.input`
  width: 40px;
  position: absolute;
  z-index: 1;
  left: ${(props) => props.left || '10%'};
  top: ${(props) => props.top || '10%'};
  outline: none;

  &:focus {
    transform: scale(0.8);
  }
`;
