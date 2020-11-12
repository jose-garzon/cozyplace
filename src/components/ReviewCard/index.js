// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import { Card, Image } from './styles';
import pic from '../../assets/images/mockupPortrait.jpg';

// ------------------------------------ COMPONENT ------------------------------------//

export const ReviewCard = () => {
  return (
    <Card>
      <article>
        <Image src={pic} alt="Image Review" />
        <div>
          <h3>Name LastName</h3>
          <Rate rate={Math.floor(Math.random() * 4 + 1)} />
        </div>
      </article>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quod, iusto? Veritatis iste sed tempore, asperiores est illo
      </p>
    </Card>
  );
};
