import { Loader } from "shared/ui";
import { useRefreshToken } from "./useRefreshToken";
import { Snackbar } from "shared/ui";

const MainPage = ({}) => {
  const { errorMessage, isError, isLoading } = useRefreshToken();

  return (
    <>
      <Snackbar isOpen={isError} message={errorMessage} />
      {isLoading && <Loader isLoading={isLoading} />}
    </>
  );
};

export default MainPage;
