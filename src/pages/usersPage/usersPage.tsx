import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "./rows";
import { Button } from "@mui/base/Button";
import { sx } from "./tableStyles";
import { useSelectRows } from "./useSelectRows";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 0.5,
    minWidth: 100,
  },
  { field: "email", headerName: "Email", flex: 1, minWidth: 300 },
  {
    field: "last_login",
    headerName: "Last login",
    type: "date",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
  },
];

const UsersPage = () => {
  const { rowSelectionModel, setRowSelectionModel } = useSelectRows();

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
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className=" m-auto min-w-96">
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            autoHeight
            hideFooter
            onRowSelectionModelChange={setRowSelectionModel}
            rowSelectionModel={rowSelectionModel}
            sx={sx}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
