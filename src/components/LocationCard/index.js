// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import styles and images
import { Card, Description } from './styles';
import mockupPic from '../../assets/images/mockupPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card display a ditail of the location in the section feature destinations at landing page
// It is hidden and is shown when user hover the location mark in the map.

export const LocationCard = () => {
  const { show, mouseCoordinates } = useSelector(
    (state) => state.mapReducer,
  );

  return (
    <Card
      show={show}
      left={`${mouseCoordinates.x}px`}
      top={`${mouseCoordinates.y}px`}
    >
      <img src={mockupPic} alt="location" />
      <Description>
        <p>Location</p>
        <small>Country</small>
      </Description>
    </Card>
  );
};
