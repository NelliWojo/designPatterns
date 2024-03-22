import { useEffect, useRef, useState } from "react";

export default function useAddComment(onSuccess: () => void) {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const listener = async (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.ctrlKey) {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
          const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify(commentRef.current?.value),
          });
          const data = await response.json();
          onSuccess();
        } catch (error) {
          setSubmitError("Smth went wrong");
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return { commentRef, isSubmitting, submitError };
}
