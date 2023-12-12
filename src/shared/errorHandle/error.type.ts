export interface CustomError {
  data: {
    message: string;
    errors: string[];
  };
  status: number;
}