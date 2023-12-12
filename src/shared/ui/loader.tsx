import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <Stack
          sx={{ width: "100%", color: "grey.500", position: "fixed", top: "0" }}
          spacing={2}
        >
          <LinearProgress color="primary" />
        </Stack>
      )}
    </>
  );
};
