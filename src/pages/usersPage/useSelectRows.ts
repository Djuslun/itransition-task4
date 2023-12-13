import { useState } from "react";
import {  GridRowSelectionModel } from "@mui/x-data-grid";

export const useSelectRows = () => {
  const [userIds, setUserIds] = useState<GridRowSelectionModel | string[]>([]);

  return {userIds, setUserIds}
}