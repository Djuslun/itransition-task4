import { CustomError } from "./error.type";

export function isCustomError(error: any): error is CustomError {
  return (
    error &&
    typeof error === "object" &&
    "data" in error &&
    "status" in error &&
    typeof error.data === "object" &&
    typeof error.data.message === "string" &&
    Array.isArray(error.data.errors) &&
    typeof error.status === "number"
  );
}