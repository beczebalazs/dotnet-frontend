import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ReduxProvider from "./providers/ReduxProvider";
import TanstackQueryClientProvider from "./providers/TanstackQueryClientProvider";

const theme = createTheme({});

function App() {
  return (
    <ReduxProvider>
      <TanstackQueryClientProvider>
        <SnackbarProvider maxSnack={5}>
          <ThemeProvider theme={theme}>
            <Router>
              <CssBaseline />
              <AppRoutes />
            </Router>
          </ThemeProvider>
        </SnackbarProvider>
      </TanstackQueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
