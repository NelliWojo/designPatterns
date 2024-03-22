import useAddComment from "../hooks/useAddComment";
import useFetchComment from "../hooks/useFetchComment";

export default function Comment() {
  const { comments, isLoading, error, refetch } = useFetchComment(); // equals to react-query
  const { commentRef, isSubmitting, submitError } = useAddComment(refetch); // equals to react-hook-form

  return <div>{/* rest of code */}</div>;
}
