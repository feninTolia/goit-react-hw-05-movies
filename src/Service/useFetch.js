import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}${url}`)
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

    fetch(url)
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
