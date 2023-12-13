// import { Button } from "@mui/base/Button";
import { Button } from "../ui/button";
import { useLogout } from "./useLogout";

export const LogoutBar = ({ userName }: { userName: string }) => {
  const { handleLogout } = useLogout();

  return (
    <div className="flex gap-2 items-center justify-between md:justify-start">
      <h2 className="text-white">{`Hello, ${userName}`}</h2>
      <Button handleClick={() => handleLogout()}>Log out</Button>
    </div>
  );
};
