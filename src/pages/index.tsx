import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const AuthPage = lazy(() => import("./authPage/authPage"));
const UsersPage = lazy(() => import("./usersPage/usersPage"));

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          Loading...
        </div>
      }
    >
      <Router>
        <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Routes>
            <Route index path="/" element={<Navigate to={"/auth"} />} />
            <Route index path="/auth" element={<AuthPage />} />
            <Route index path="/users" element={<UsersPage />} />
            <Route path="*" element={<>Not found</>} />
          </Routes>
        </main>
      </Router>
    </Suspense>
  );
};
