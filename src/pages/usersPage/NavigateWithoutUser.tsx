import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { IUser } from "entities/user";

export const NavigateWithoutUser = ({
  children,
  user,
}: {
  children: ReactNode;
  user: IUser | null;
}) => {
  if (!user?.id || !user?.isActive) {
    return <Navigate to={"/login"} />;
  }

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};
