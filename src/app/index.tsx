import { AppRouter } from "./router";
import { useRefreshToken } from "./useRefreshToken";
import { Loader } from "shared/ui";
import { Snackbar } from "shared/ui";

function App() {
  const { errorMessage, isError, isLoading } = useRefreshToken();

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      {isLoading ? <Loader isLoading={isLoading} /> : <AppRouter />}
      <Snackbar isOpen={isError} message={errorMessage} />
    </div>
  );
}

export default App;
