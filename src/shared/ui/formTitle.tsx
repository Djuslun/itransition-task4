import { ReactNode } from "react";

const FormTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {children}
    </h1>
  );
};

export default FormTitle;
