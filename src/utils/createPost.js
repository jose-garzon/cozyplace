const URL = 'https://cozyplace.herokuapp.com/api/post/create';

export async function createPost(form, token) {
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });
  return response;
}
