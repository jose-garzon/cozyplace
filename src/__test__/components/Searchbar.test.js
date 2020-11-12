// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { SearchBar } from '../../components/SearchBar';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<SearchBar />', () => {
  const searchBar = shallow(
    <ProviderMock>
      <SearchBar />
    </ProviderMock>,
  );
  test('Render SearchBar component', () => {
    expect(searchBar.length).toEqual(1);
  });
});
