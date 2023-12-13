import { GridColDef } from "@mui/x-data-grid";

export const sx = {
  borderColor: "white",
  "*": {
    color: "white",
  },
  ".MuiDataGrid-cell:focus,.MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within":
    {
      outline: "none",
    },
  ".MuiDataGrid-main": {
    backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
    borderRadius: "4px",
  },
  ".MuiDataGrid-columnHeaders": {
    backgroundColor: "rgb(42 30 80 / var(--tw-bg-opacity))",
  },
  ".MuiDataGrid-row:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    transition: "all 0.15s",
  },
}

export const columns: GridColDef[] = [
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
    type: "dateTime",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "status",
    valueGetter: (params) => {
      if (params.row.isActive) {
        return "Active";
      } else {
        return "Blocked";
      }
    },
    headerName: "Status",
    flex: 1,
    minWidth: 100,
  },
];