import { useDeleteUsers } from "./useDeleteUsers";
import { useChangeAciveStatus } from "./useChangeAciveStatus";
import { Snackbar, Loader } from "shared/ui";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "../ui/button";

export const ToolBar = ({ userIds }: { userIds: string[] }) => {
  const {
    handleDeleteUsers,
    errorMessage: deleteUsersErrorMessage,
    isError: isDeleteUsersError,
    isLoading: isUsersDeleting,
  } = useDeleteUsers();
  const { handleChangeUserStatus, errorMessage, isError, isLoading } =
    useChangeAciveStatus();

  return (
    <>
      <div className="flex gap-2">
        <Button
          handleClick={() =>
            handleChangeUserStatus({
              userIds: userIds as string[],
              activeStatus: false,
            })
          }
        >
          Block
        </Button>
        <Button
          handleClick={() =>
            handleChangeUserStatus({
              userIds: userIds as string[],
              activeStatus: true,
            })
          }
        >
          <LockOpenIcon />
        </Button>
        <Button handleClick={() => handleDeleteUsers(userIds as string[])}>
          <DeleteForeverIcon />
        </Button>
      </div>
      <Snackbar
        isOpen={isError || isDeleteUsersError}
        message={errorMessage || deleteUsersErrorMessage}
      />
      <Loader isLoading={isLoading || isUsersDeleting} />
    </>
  );
};
