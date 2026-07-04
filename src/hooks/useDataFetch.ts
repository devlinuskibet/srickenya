import { useState, useEffect } from "react";

export function useDataFetch<T>(data: T, delay: number = 800) {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        setResult(data);
        setLoading(false);
      }
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [data, delay]);

  return { data: result, loading, error };
}
