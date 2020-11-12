const API = 'https://cozyplace.herokuapp.com/';

export const UpdateUser = async (form, token, id) => {
  const apiURL = `${API}api/user/${id}`;
  try {
    const response = await fetch(apiURL, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        id: `${id}`,
      }),
      body: JSON.stringify(form),
    });
    return response;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
