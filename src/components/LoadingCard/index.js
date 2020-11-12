// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components

// ------------------------------ import styles and images
import { Loading } from './styles';

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const LoadingCard = ({ page, position }) => {
  return <Loading position={`${page}${position}`} />;
};
