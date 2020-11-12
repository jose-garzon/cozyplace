// ------------------------------ import components
import { showLocation, hideLocation } from '../../actions/mapActions';

// ------------------------------------ TESTS ------------------------------------//
describe('Test the Map Actions', () => {
  test('showTestimonial Action', () => {
    const payload = true;
    const expected = {
      type: 'SHOW_LOCATION',
      payload,
    };

    expect(showLocation(payload)).toEqual(expected);
  });

  test('hideTestimonial Action', () => {
    const payload = false;
    const expected = {
      type: 'HIDE_LOCATION',
      payload,
    };

    expect(hideLocation(payload)).toEqual(expected);
  });
});
