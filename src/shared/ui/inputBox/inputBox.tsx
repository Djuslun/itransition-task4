import Input from "./input";
import Label from "./label";

const InputBox = ({
  type,
  label,
  placeholder,
  id,
}: {
  type: string;
  label: string;
  placeholder: string;
  id?: string;
}) => {
  return (
    <div>
      <Label htmlFor={id || type}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} />
    </div>
  );
};

export default InputBox;
