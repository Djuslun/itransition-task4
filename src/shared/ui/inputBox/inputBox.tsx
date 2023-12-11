import Input from "./input";
import Label from "./label";
import { FieldProps } from "formik";

interface IInputBoxProps extends FieldProps {
  type: string;
  label: string;
  placeholder: string;
  id?: string;
}

const InputBox = ({
  type,
  label,
  placeholder,
  id,
  ...props
}: IInputBoxProps) => {
  return (
    <div>
      <Label htmlFor={id || type}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id || type}
        {...props}
      />
    </div>
  );
};

export default InputBox;
