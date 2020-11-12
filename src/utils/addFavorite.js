const URL = 'https://cozyplace.herokuapp.com/api/post/favorite/';

export const addFavorite = async (id, token) => {
  const apiURL = `${URL}${id}`;
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
