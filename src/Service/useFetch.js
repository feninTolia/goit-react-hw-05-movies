import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '967fca2e12d0ec29fa75f230a5acdce3';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}${url}&api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);

    fetch(`${BASE_URL}${url}&api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
