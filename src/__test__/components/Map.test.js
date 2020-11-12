// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { Map } from '../../components/Map';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<Map />', () => {
  const map = shallow(
    <ProviderMock>
      <Map />
    </ProviderMock>,
  );
  test('Render Map component', () => {
    expect(map.length).toEqual(1);
  });
});
