export const getFavoritePosts = async (userId, token) => {
  const apiURL = `https://cozyplace.herokuapp.com/api/user/favorites/${userId}`;
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
    const data = await response.json();
    return data.data.favorite;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
