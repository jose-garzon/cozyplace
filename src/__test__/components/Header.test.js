// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { Header } from '../../components/Header';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  test('Render Header component', () => {
    expect(header.length).toEqual(1);
  });
});
