import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Container } from "@mui/system";
import { UserRoutes } from "./routes/UserRoutes";
import { ThemeProvider } from "@emotion/react";
import theme from "./Utility/Theme";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <Container id="rootDiv">
              <UserRoutes />
            </Container>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
