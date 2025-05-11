import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global-styles";
import { Toaster } from "react-hot-toast";
import { theme } from "./assets/styles/theme";
import { toastConfig } from "./config/toast-config";
import Router from "./routes";
import { UserProvider } from "./context/user-context";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <UserProvider>
          <Toaster toastOptions={{ ...toastConfig }} />
          <Router />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
