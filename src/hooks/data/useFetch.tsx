'use client';

import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsLoading(false);
        setData(json);
        setError(null);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
