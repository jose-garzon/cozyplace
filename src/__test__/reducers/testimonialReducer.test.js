// ------------------------------ import components
import { testimonialReducer } from '../../reducers/testimonialReducer';

// ------------------------------------ TESTS ------------------------------------//
const initialState = {
  show: false,
};

describe('Testing Testimonial Reducer', () => {
  test('Return initial State', () => {
    expect(testimonialReducer(initialState, '')).toEqual(
      initialState,
    );
  });

  test('Show location card', () => {
    const expected = {
      show: true,
    };
    const payload = true;
    const action = {
      type: 'SHOW_TESTIMONIAL',
      payload,
    };
    expect(testimonialReducer(initialState, action)).toEqual(
      expected,
    );
  });

  test('Hide location card', () => {
    const expected = {
      show: false,
    };
    const payload = false;
    const action = {
      type: 'HIDE_TESTIMONIAL',
      payload,
    };
    expect(testimonialReducer(initialState, action)).toEqual(
      expected,
    );
  });
});
