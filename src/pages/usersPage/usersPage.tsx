import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/base/Button";
import { sx, columns } from "./tableSettings";
import { useSelectRows } from "./useSelectRows";
import { useGetUsersQuery } from "entities/user";

const UsersPage = () => {
  const { rowSelectionModel, setRowSelectionModel } = useSelectRows();
  const { data, isLoading, isError } = useGetUsersQuery();

  const userData = data?.map((user) => ({
    ...user,
    last_login: new Date(user.last_login),
  }));

  return (
    <div className="p-5">
      <div className="flex gap-2 m-auto min-w-96 mb-4">
        <Button className="px-4 py-2 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all">
          Block
        </Button>
        <Button className="px-2 py-1 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all">
          Unblock
        </Button>
        <Button className="px-2 py-1 bg-violet-950 rounded-md text-white hover:bg-violet-600 transition-all">
          Delete
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
