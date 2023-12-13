import { useAppSelector } from "shared/api";
import { useState, useEffect } from "react";

export type TRedirectUrl = "/users" | "/registration" | "/";

export const useRedirect = () => {
  const { user } = useAppSelector((state) => state.user);
  const [redirectUrl, setRedirectUtl] = useState<TRedirectUrl>("/");

  useEffect(() => {
    setRedirectUtl(user?.id ? "/users" : "/registration");
  }, [user?.id]);

  return redirectUrl
}