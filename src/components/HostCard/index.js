// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { Card, HostName, Image } from './styles';
import { Rate } from '../Rate';

// ------------------------------------ COMPONENT ------------------------------------//

export const HostCard = ({ name, rating, userImg }) => {
  return (
    <Card>
      <Image src={userImg} alt="Host picture" />
      <HostName>
        <h2>{name}</h2>
        <Rate rate={rating} />
      </HostName>
    </Card>
  );
};
