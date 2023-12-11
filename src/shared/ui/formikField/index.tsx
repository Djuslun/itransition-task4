import { ErrorMessage, Field } from "formik";
import { ReactElement } from "react";

export const FormikField = ({ ...props }) => {
  return (
    <div className="relative">
      <Field {...props} />
      <ErrorMessage name={props.name}>
        {(msg: string): ReactElement => (
          <div className="text-red-500 absolute top-0 right-0">{msg}</div>
        )}
      </ErrorMessage>
    </div>
  );
};
