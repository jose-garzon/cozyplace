// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { ExperiencesLayout } from '../../components/ExperiencesLayout';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<ExperiencesLayout />', () => {
  const experiencesLayout = shallow(
    <ProviderMock>
      <ExperiencesLayout />
    </ProviderMock>,
  );
  test('Render ExperiencesLayout component', () => {
    expect(experiencesLayout.length).toEqual(1);
  });
});

