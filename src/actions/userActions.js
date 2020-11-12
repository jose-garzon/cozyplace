import { getUserPosts } from '../utils/PostUser';
import { getFavoritePosts } from '../utils/getFavoritePosts';

const URL = 'https://cozyplace.herokuapp.com/api/';

export const openLogin = (payload) => ({
  type: 'OPEN_LOGIN',
  payload: true,
});

export const openSign = (payload) => ({
  type: 'OPEN_SIGNIN',
  payload: true,
});

export const closeModal = (payload) => ({
  type: 'CLOSE_MODAL',
  payload: false,
});

export const getUserData = (id, token) => async (dispatch) => {
  try {
    const response = await fetch(`${URL}user/favorites/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    localStorage.setItem(
      'VERIFY',
      JSON.stringify({ ...data.data, token }),
    );
    dispatch({
      type: 'GET_USER_DATA',
      payload: { ...data.data, token },
    });
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export const setSelection = (payload) => ({
  type: 'SET_SELECTION',
  payload,
});

export const errorModal = (payload) => ({
  type: 'SHOW_ERROR',
  payload,
});

export const getFavoriteExperiences = (id, token) => async (
  dispatch,
) => {
  dispatch({
    type: 'LOADING',
  });

  const data = await getFavoritePosts(id, token);
  dispatch({
    type: 'GET_DISPLAYED_EXPERIENCES',
    payload: data,
  });
};

export const getUserExperiences = (id, token) => async (dispatch) => {
  dispatch({
    type: 'LOADING',
  });

  const data = await getUserPosts(id, token);
  dispatch({
    type: 'GET_DISPLAYED_EXPERIENCES',
    payload: data,
  });
};
