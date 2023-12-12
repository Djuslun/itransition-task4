import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { lazy } from "react";
import { useAppSelector } from "shared/api";

const RegistrationPage = lazy(
  () => import("pages/registrationPage/registrationPage")
);
const UsersPage = lazy(() => import("pages/usersPage/usersPage"));
const LoginPage = lazy(() => import("pages/loginPage/loginPage"));

export const AppRouter = () => {
  const { user } = useAppSelector((store) => store.user);
  const redirectUrl = user ? "/users" : "/registration";

  return (
    <Suspense fallback={<div className="bg-gray-900 min-h-screen"></div>}>
      <Router>
        <main>
          <Routes>
            <Route index path="/" element={<Navigate to={redirectUrl} />} />
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
