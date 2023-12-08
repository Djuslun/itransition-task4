import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const AuthPage = lazy(() => import("./authPage"));
const UsersManagePage = lazy(() => import("./usersManagePage"));

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <main>
          <Routes>
            <Route index path="/" element={<Navigate to={"/auth"} />} />
            <Route index path="/auth" element={<AuthPage />} />
            <Route index path="/manage" element={<UsersManagePage />} />
            <Route path="*" element={<>Not found</>} />
          </Routes>
        </main>
      </Router>
    </Suspense>
  );
};
