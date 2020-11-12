// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { LoginModal } from '../../components/LoginModal';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<LoginModal />', () => {
  const login = shallow(
    <ProviderMock>
      <LoginModal />
    </ProviderMock>,
  );
  test('Render LoginModal component', () => {
    expect(login.length).toEqual(1);
  });
});
