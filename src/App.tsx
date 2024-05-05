import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
