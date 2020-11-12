// ------------------------------ import components
import {
  openLogin,
  openSign,
  closeModal,
  getFormData,
} from '../../actions/userActions';
import { userMock } from '../../__mocks__/userMock';

// ------------------------------------ TESTS ------------------------------------//
describe('Test the User Actions', () => {
  test('openLogin Action', () => {
    const payload = true;
    const expected = {
      type: 'OPEN_LOGIN',
      payload,
    };

    expect(openLogin(payload)).toEqual(expected);
  });

  test('openSign Action', () => {
    const payload = true;
    const expected = {
      type: 'OPEN_SIGNIN',
      payload,
    };

    expect(openSign(payload)).toEqual(expected);
  });

  test('closeModal Action', () => {
    const payload = false;
    const expected = {
      type: 'CLOSE_MODAL',
      payload,
    };

    expect(closeModal(payload)).toEqual(expected);
  });
});
