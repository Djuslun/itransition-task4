import classNames from "classnames";
interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ children, className, ...props }: ILabel) => {
  const labelClassName = classNames(
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    className
  );

  return (
    <>
      <label {...props} className={labelClassName}>
        {children}
      </label>
    </>
  );
};

export default Label;
