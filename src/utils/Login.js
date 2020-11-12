const API = 'https://cozyplace.herokuapp.com/';

const loginUser = async (form) => {
  const apiURL = `${API}${'api/user/login'}`;
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
export default loginUser;
