// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { LocationCard } from '../../components/LocationCard';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<LocationCard />', () => {
  const locationCard = shallow(
    <ProviderMock>
      <LocationCard />
    </ProviderMock>,
  );
  test('Render LocationCard component', () => {
    expect(locationCard.length).toEqual(1);
  });
});
