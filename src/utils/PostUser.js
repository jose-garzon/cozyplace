export const getUserPosts = async (userId, token) => {
  const apiURL = `https://cozyplace.herokuapp.com/api/user/postsuser/${userId}`;
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
    return data.data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
