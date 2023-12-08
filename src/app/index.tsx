import { AppRouter } from "pages";
import { MantineProvider, createTheme } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
