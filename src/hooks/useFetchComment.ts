import { useCallback, useEffect, useState } from "react";

export default function useFetchComment() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchComments = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      setError("Smth went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchComments();
  }, [handleFetchComments]);

  return { comments, isLoading, error, refetch: handleFetchComments };
}
