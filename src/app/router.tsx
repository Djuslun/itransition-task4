import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { lazy } from "react";
import { TRedirectUrl } from "./useRedirect";
import { Loader } from "shared/ui";

const RegistrationPage = lazy(
  () => import("pages/registrationPage/registrationPage")
);
const UsersPage = lazy(() => import("pages/usersPage/usersPage"));
const LoginPage = lazy(() => import("pages/loginPage/loginPage"));

export const AppRouter = ({ redirectUrl }: { redirectUrl: TRedirectUrl }) => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
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
