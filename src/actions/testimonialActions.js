export const showTestimonial = (payload) => ({
  type: 'SHOW_TESTIMONIAL',
  payload: true,
});

export const hideTestimonial = (payload) => ({
  type: 'HIDE_TESTIMONIAL',
  payload: false,
});

export const setTestimonial = (payload) => ({
  type: 'SET_TESTIMONIAL',
  payload,
});
