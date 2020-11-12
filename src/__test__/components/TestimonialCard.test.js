// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { TestimonialCard } from '../../components/TestimonialCard';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<TestimonialCard />', () => {
  const testimonialCard = shallow(
    <ProviderMock>
      <TestimonialCard />
    </ProviderMock>,
  );
  test('Render TestimonialCard component', () => {
    expect(testimonialCard.length).toEqual(1);
  });
});
