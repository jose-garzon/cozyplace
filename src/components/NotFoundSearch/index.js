// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { NotFound } from './styles';
import notFound from '../../assets/images/notFound.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const NotFoundSearch = ({ page }) => {
  return (
    <NotFound page={page}>
      <h2> We didn't find the location. Search again. </h2>
      <img src={notFound} alt="not found search" />
    </NotFound>
  );
};
