// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { ExperienceCard } from '../../components/ExperienceCard';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<ExperienceCard />', () => {
  const experienceCard = shallow(
    <ProviderMock>
      <ExperienceCard />
    </ProviderMock>,
  );
  test('Render ExperienceCard component', () => {
    expect(experienceCard.length).toEqual(1);
  });
});