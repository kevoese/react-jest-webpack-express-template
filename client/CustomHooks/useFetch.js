import { useState, useEffect } from 'react';
import axiosCall from '../utils/axiosCall';

const useFetchData = (url, postData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (url && postData) {
      (async () => {
        setLoading(true);
        try {
          const content = await axiosCall({
            url,
            data: postData.data,
            method: postData.method,
          });

          setData(content);
          setError(null);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      })();
    }
  }, [url, postData]);

  return [data, error, loading];
};

export default useFetchData;
