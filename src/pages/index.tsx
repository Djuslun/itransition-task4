import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const RegistrationPage = lazy(
  () => import("./registrationPage/registrationPage")
);
const UsersPage = lazy(() => import("./usersPage/usersPage"));
const LoginPage = lazy(() => import("./loginPage/loginPage"));

export const AppRouter = () => {
  return (
    <Suspense
      fallback={<div className="bg-gray-900 min-h-screen">Loading...</div>}
    >
      <Router>
        <main className="bg-gray-900 min-h-screen">
          <Routes>
            <Route index path="/" element={<Navigate to={"/registration"} />} />
            <Route index path="/registration" element={<RegistrationPage />} />
            <Route index path="/login" element={<LoginPage />} />
            <Route index path="/users" element={<UsersPage />} />
            <Route path="*" element={<>Not found</>} />
          </Routes>
        </main>
      </Router>
    </Suspense>
  );
};
