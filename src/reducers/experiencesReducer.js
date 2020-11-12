const initialState = {
  loading: false,
  searchExperiences: [],
  current: {},
  showIndicator: {
    status: false,
    postion: { x: 0, y: 0 },
    message: '',
  },
  mouseCoordinates: { x: 0, y: 0 },
};

export const experiencesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true };

    case 'SET_TRENDING_EXPERIENCES':
      return { ...state, searchExperiences: payload, loading: false };

    case 'SET_CURRENT_EXPERIENCE':
      return { ...state, current: payload };

    case 'GET_ALL_EXPERIENCE':
      return { ...state, searchExperiences: payload, loading: false };

    case 'SHOW_INDICATOR':
      return { ...state, showIndicator: payload };

    case 'SET_INDICATOR_POSITION':
      return { ...state, mouseCoordinates: payload };

    default:
      return state;
  }
};
