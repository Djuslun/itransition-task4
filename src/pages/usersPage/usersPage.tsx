import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/base/Button";
import { sx, columns } from "./tableSettings";
import { useSelectRows } from "./useSelectRows";
import { useGetUsersQuery } from "entities/user";
import { useLogout } from "./useLogout";
import { useAppSelector } from "shared/api";
import { Navigate } from "react-router-dom";
import { useDeleteUserMutation } from "entities/user";
import { useChangeActiveStatusMutation } from "entities/user";

const UsersPage = () => {
  const { rowSelectionModel, setRowSelectionModel } = useSelectRows();
  const { data, isLoading, isError, refetch } = useGetUsersQuery();
  const [deleteUsers] = useDeleteUserMutation();
  const [changeActiveStatus] = useChangeActiveStatusMutation();
  const { handleLogout } = useLogout();
  const { user } = useAppSelector((store) => store.user);

  if (!user?.id || !user?.isActive) {
    return <Navigate to={"/login"} />;
  }

  if (!user) {
    return <Navigate to={"/"} />;
  }

  const userData = data?.map((user) => ({
    ...user,
    last_login: new Date(user.last_login),
  }));

  return (
    <div>
      <div className="flex gap-2 m-auto min-w-96 mb-4">
        <Button
          onClick={() =>
            changeActiveStatus({
              userIds: rowSelectionModel as string[],
              activeStatus: false,
            })
          }
          className="px-4 py-2 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all"
        >
          Block
        </Button>
        <Button
          onClick={() =>
            changeActiveStatus({
              userIds: rowSelectionModel as string[],
              activeStatus: true,
            })
          }
          className="px-2 py-1 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all"
        >
          Unblock
        </Button>
        <Button
          onClick={() => deleteUsers(rowSelectionModel as string[])}
          className="px-2 py-1 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all"
        >
          Delete
        </Button>
        <Button
          onClick={() => handleLogout()}
          className="px-2 py-1 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all"
        >
          Log out
        </Button>
      </div>
      <div className=" m-auto min-w-96">
        {userData && (
          <DataGrid
            rows={userData}
            columns={columns}
            checkboxSelection
            autoHeight
            hideFooter
            onRowSelectionModelChange={setRowSelectionModel}
            rowSelectionModel={rowSelectionModel}
            sx={sx}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
