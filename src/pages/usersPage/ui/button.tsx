import { Button as MuiButton } from "@mui/base/Button";
import { ReactNode } from "react";

export const Button = ({
  children,
  handleClick,
}: {
  children: ReactNode;
  handleClick: () => void;
}) => {
  return (
    <MuiButton
      onClick={() => handleClick()}
      className="px-3 py-1 h-full bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all"
    >
      {children}
    </MuiButton>
  );
};
