// ------------------------------ import libraries
import React, { lazy } from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { ProviderMock } from '../../__mocks__/ProviderMock';

const HomePage = lazy(() => import('../../pages/Home'));

// ------------------------------------ TESTS ------------------------------------//
describe('<HomePage />', () => {
  const home = shallow(
    <ProviderMock>
      <HomePage />
    </ProviderMock>,
  );
  test('Render Home component', () => {
    expect(home.length).toEqual(1);
  });
});
