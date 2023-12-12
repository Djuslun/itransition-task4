import { useState, useEffect } from "react";
import { isCustomError } from "shared/errorHandle/isError";

export const useErrorMessage = (error: any) => {
const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (isCustomError(error)) {
      setErrorMessage(error.data.message);
    } else {
      setErrorMessage(error?.message)
    }
  }, [error]);

  return errorMessage
}