import { ReactNode } from "react";

const AuthButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="submit"
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800"
    >
      {children}
    </button>
  );
};

export default AuthButton;
