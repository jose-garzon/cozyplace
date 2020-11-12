// ------------------------------ import libraries
import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

// ------------------------------ import components
import { Footer } from '../../components/Footer';

// ------------------------------------ TESTS ------------------------------------//
describe('<Footer />', () => {
  test('Render Footer component', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
  test('Footer Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
