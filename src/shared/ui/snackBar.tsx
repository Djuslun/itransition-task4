import Button from "@mui/material/Button";
import MuiSnackBar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState, SyntheticEvent, useEffect } from "react";

export const Snackbar = ({
  isOpen,
  message,
}: {
  isOpen: boolean;
  message: string;
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <MuiSnackBar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message || ""}
        action={action}
      />
    </div>
  );
};
