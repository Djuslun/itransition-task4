import { ReactNode } from "react";

const AuthFormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className=" flex justify-center items-center">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
        </div>
      </section>
    </>
  );
};

export default AuthFormWrapper;
