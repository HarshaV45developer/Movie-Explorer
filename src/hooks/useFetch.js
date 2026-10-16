import {
  useCallback,
  useEffect,
  useState,
} from "react";

const useFetch = (
  fetchFunction,
  initialData = null
) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    if (!fetchFunction) {
      setError("API function is missing");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await fetchFunction();

      setData(result);
    } catch (error) {
      console.error("useFetch Error:", error);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useFetch;