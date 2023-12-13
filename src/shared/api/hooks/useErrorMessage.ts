import { useState, useEffect } from "react";
import { isCustomError } from "shared/errorHandle/isError";

export const useErrorMessage = (error: any): string => {
const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (isCustomError(error)) {
      setErrorMessage(error.data.message);
    } else {
      setErrorMessage('Unexpected error')
    }
  }, [error]);

  return errorMessage
}