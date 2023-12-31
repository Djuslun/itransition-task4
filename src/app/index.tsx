import { AppRouter } from "./router";
import { useRefreshToken } from "./useRefreshToken";
import { Loader } from "shared/ui";
import { useRedirect } from "./useRedirect";

function App() {
  const { isLoading } = useRefreshToken();
  const redirectUrl = useRedirect();

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <AppRouter redirectUrl={redirectUrl} />
      )}
    </div>
  );
}

export default App;
