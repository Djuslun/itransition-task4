import { useState, useEffect } from "react";
import {  GridRowSelectionModel } from "@mui/x-data-grid";

export const useSelectRows = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel | string>([]);

  useEffect(() => {
    // console.log(rowSelectionModel);
  }, [rowSelectionModel]);

  return {rowSelectionModel, setRowSelectionModel}
}