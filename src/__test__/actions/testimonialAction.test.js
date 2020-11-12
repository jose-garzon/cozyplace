// ------------------------------ import components
import {
  showTestimonial,
  hideTestimonial,
} from '../../actions/testimonialActions';

// ------------------------------------ TESTS ------------------------------------//
describe('Test the Testimonials Actions', () => {
  test('showTestimonial Action', () => {
    const payload = true;
    const expected = {
      type: 'SHOW_TESTIMONIAL',
      payload,
    };

    expect(showTestimonial(payload)).toEqual(expected);
  });

  test('hideTestimonial Action', () => {
    const payload = false;
    const expected = {
      type: 'HIDE_TESTIMONIAL',
      payload,
    };

    expect(hideTestimonial(payload)).toEqual(expected);
  });
});
