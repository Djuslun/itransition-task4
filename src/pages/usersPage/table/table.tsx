import { DataGrid } from "@mui/x-data-grid";
import { sx, columns } from "./tableSettings";
import { GridRowSelectionModel } from "@mui/x-data-grid";

export const Table = ({
  userData,
  setUserIds,
  userIds,
}: {
  userData: any;
  setUserIds: any;
  userIds: GridRowSelectionModel | string[];
}) => {
  return (
    <div className=" m-auto min-w-96">
      <DataGrid
        rows={userData}
        columns={columns}
        checkboxSelection
        autoHeight
        hideFooter
        onRowSelectionModelChange={setUserIds}
        rowSelectionModel={userIds}
        sx={sx}
      />
    </div>
  );
};
