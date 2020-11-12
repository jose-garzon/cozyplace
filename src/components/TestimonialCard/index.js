// ------------------------------ import libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { Icon } from '../Icons';
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import { Card, Image, Description } from './styles';

// -------- import redux actions
import { hideTestimonial } from '../../actions/testimonialActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const TestimonialCard = () => {
  const { show, data } = useSelector(
    (state) => state.testimonialReducer,
  );
  const dispatch = useDispatch();

  function hideTestimonialCard() {
    dispatch(hideTestimonial());
  }

  return (
    <Card show={show}>
      <Icon type="close" click={hideTestimonialCard} />
      <Image src={data.image} alt="" />
      <Description>
        <div>
          <h1>{data.name}</h1>
          <Rate rate={data.rate} />
        </div>
        <p>{data.testimonial}</p>
      </Description>
    </Card>
  );
};
