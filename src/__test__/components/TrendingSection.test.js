// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { TrendingSection } from '../../components/TrendingSection';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<TrendingSection />', () => {
  const trendingSection = shallow(
    <ProviderMock>
      <TrendingSection />
    </ProviderMock>,
  );
  test('Render TrendingSection component', () => {
    expect(trendingSection.length).toEqual(1);
  });
});
