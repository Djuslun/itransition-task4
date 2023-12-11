import { Link } from "react-router-dom";

const AuthFormLink = ({
  to,
  linkTitle,
  linkText,
}: {
  to: string;
  linkTitle: string;
  linkText: string;
}) => {
  return (
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      {`${linkTitle} `}
      <Link
        to={to}
        className="font-medium text-sky-600 hover:underline dark:text-sky-500"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFormLink;
