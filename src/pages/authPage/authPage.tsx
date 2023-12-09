import { InputBox } from "shared";

const AuthPage = ({}) => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900   min-h-screen flex justify-center items-center">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputBox
                label="Your email"
                placeholder="name@email.com"
                type="email"
              />
              <InputBox
                label="Your name"
                placeholder="Enter your name"
                type="name"
              />
              <InputBox
                label="Password"
                placeholder="••••••••"
                type="password"
              />
              <InputBox
                label="Confirm password"
                placeholder="••••••••"
                type="password"
                id="confirm-password"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-sky-600 hover:underline dark:text-sky-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
