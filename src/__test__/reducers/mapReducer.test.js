// ------------------------------ import components
import { mapReducer } from '../../reducers/mapReducer';

// ------------------------------------ TESTS ------------------------------------//
const initialState = {
  show: false,
};

describe('Testing Map Reducer', () => {
  test('Return initial State', () => {
    expect(mapReducer(initialState, '')).toEqual(initialState);
  });

  test('Show location card', () => {
    const expected = {
      show: true,
    };
    const payload = true;
    const action = {
      type: 'SHOW_LOCATION',
      payload,
    };
    expect(mapReducer(initialState, action)).toEqual(expected);
  });

  test('Hide location card', () => {
    const expected = {
      show: false,
    };
    const payload = false;
    const action = {
      type: 'HIDE_LOCATION',
      payload,
    };
    expect(mapReducer(initialState, action)).toEqual(expected);
  });
});
