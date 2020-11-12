const API = 'https://cozyplace.herokuapp.com/';

const createUser = async (form) => {
  const apiURL = `${API}api/user/signup`;
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
    console.log(data);
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
export default createUser;
