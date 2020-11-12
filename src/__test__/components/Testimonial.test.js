// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { Testimonial } from '../../components/Testimonial';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<Testimonial />', () => {
  const testimonial = shallow(
    <ProviderMock>
      <Testimonial />
    </ProviderMock>,
  );
  test('Render Testimonial component', () => {
    expect(testimonial.length).toEqual(1);
  });
});
