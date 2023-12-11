import classNames from "classnames";
import { FieldProps } from "formik";
import { ChangeEvent } from "react";
import "./input.css";
interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form">,
    FieldProps {}

const Input = ({ className, type, id, field, form, ...props }: IInput) => {
  const inputClassName = classNames(
    `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
    focus:border-primary-600  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
    autofill:bg-gray-50`,
    className
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    form.setFieldValue(field.name, event.target.value);
  };

  return (
    <>
      <input
        {...props}
        className={inputClassName}
        name={id || type}
        id={id || type}
        type={type}
        required
        onChange={handleChange}
        value={field.value}
        onBlur={field.onBlur}
      />
    </>
  );
};

export default Input;
