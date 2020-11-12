// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { TestimonialSection } from '../../components/TestimonialSection';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<TestimonialSection />', () => {
  const testimonialSection = shallow(
    <ProviderMock>
      <TestimonialSection />
    </ProviderMock>,
  );
  test('Render TestimonialSection component', () => {
    expect(testimonialSection.length).toEqual(1);
  });
});
