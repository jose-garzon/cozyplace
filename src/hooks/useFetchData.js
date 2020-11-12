// ------------------------------ import libraries
import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    }
    getData(url);
  }, []);

  return data;
};
