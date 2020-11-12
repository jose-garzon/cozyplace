// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import {
  SearchBarStyled,
  SearchContainer,
  SearchInput,
} from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this component is the search bar to get the experiences
export const SearchReview = () => {
  return (
    <SearchBarStyled>
      <SearchContainer>
        <SearchInput>
          <Icon type="star" />
          <p>205 reviews</p>
        </SearchInput>
      </SearchContainer>
    </SearchBarStyled>
  );
};
