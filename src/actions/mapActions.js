export const showLocation = (payload) => ({
  type: 'SHOW_LOCATION',
  payload: true,
});

export const hideLocation = (payload) => ({
  type: 'HIDE_LOCATION',
  payload: false,
});

export const setMouseCoordinates = (payload) => ({
  type: 'SET_MOUSE',
  payload,
});

export const setLocationData = (payload) => ({
  type: 'SET_DATA',
  payload,
});
