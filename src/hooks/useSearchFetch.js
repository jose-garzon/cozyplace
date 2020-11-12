// ------------------------------ import libraries
import { useState, useEffect } from 'react';

export const useSearchFetch = (city) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://cozyplace.herokuapp.com/api/show/home',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: city,
          }),
        },
      );
      const data = await response.json();
      setData(data.data);
    }
    getData();
  }, []);

  return data;
};
