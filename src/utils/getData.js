export const getData = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
