// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Card } from './styles';
import { Button } from '../../global-styles/Buttons';

// ------------------------------------ COMPONENT ------------------------------------//

export const HostTravel = ({ location, duration, tag }) => {
  return (
    <Card>
      <div>
        <Icon type="location" />
        <p>{location}</p>
      </div>
      <div>
        <Icon type="clock" />
        <p>{duration}</p>
      </div>
      <Button>{tag}</Button>
    </Card>
  );
};
