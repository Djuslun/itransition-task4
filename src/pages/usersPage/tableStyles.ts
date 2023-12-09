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