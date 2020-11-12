const initialState = {
  show: false,
  data: {},
};

export const testimonialReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_TESTIMONIAL':
      return { ...state, show: payload };

    case 'HIDE_TESTIMONIAL':
      return { ...state, show: payload };

    case 'SET_TESTIMONIAL':
      return { ...state, data: payload };

    default:
      return state;
  }
};
