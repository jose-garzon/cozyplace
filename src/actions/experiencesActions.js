export const setTrending = () => async (dispatch) => {
  dispatch({
    type: 'LOADING',
  });

  const response = await fetch(
    'https://cozyplace.herokuapp.com/api/post/',
  );
  const data = await response.json();
  dispatch({
    type: 'SET_TRENDING_EXPERIENCES',
    payload: data.data,
  });
};

export const searchExperiences = (city) => async (dispatch) => {
  dispatch({
    type: 'LOADING',
  });

  const response = await fetch(
    'https://cozyplace.herokuapp.com/api/show/home',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: city,
      }),
    },
  );
  const data = await response.json();

  dispatch({
    type: 'SET_TRENDING_EXPERIENCES',
    payload: data.data,
  });
};

export const setCurrentExperience = (id) => async (dispatch) => {
  const response = await fetch(
    `https://cozyplace.herokuapp.com/api/post/${id}`,
  );
  const data = await response.json();
  dispatch({
    type: 'SET_CURRENT_EXPERIENCE',
    payload: data.data,
  });
};

export const getAllExperiences = () => async (dispatch) => {
  dispatch({
    type: 'LOADING',
  });

  const response = await fetch(
    'https://cozyplace.herokuapp.com/api/post/',
  );
  const data = await response.json();
  dispatch({
    type: 'GET_ALL_EXPERIENCE',
    payload: data.data.slice(0, 10),
  });
};

export const createExperience = (form) => async (dispatch) => {
  dispatch({
    type: 'CREATE_EXPERIENCE',
    payload: form,
  });
};

export const showIndicator = (indicator) => (dispatch) => {
  dispatch({ type: 'SHOW_INDICATOR', payload: indicator });

  setTimeout(() => {
    dispatch({
      type: 'SHOW_INDICATOR',
      payload: {
        ...indicator,
        status: false,
      },
    });
  }, 1500);
};

export const setIndicatorPosition = (payload) => ({
  type: 'SET_INDICATOR_POSITION',
  payload,
});
