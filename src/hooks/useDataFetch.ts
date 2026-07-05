import { useState, useEffect } from "react";

export function useDataFetch<T>(data: T, delay: number = 800) {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (!controller.signal.aborted) {
        try {
          if (!data) throw new Error("No data provided");
          setResult(data);
        } catch (err) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        } finally {
          setLoading(false);
        }
      }
    }, delay);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [data, delay]);

  return { data: result, loading, error };
}
