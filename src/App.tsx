import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global-styles";
import { Toaster } from "react-hot-toast";
import { theme } from "./assets/styles/theme";
import { toastConfig } from "./config/toast-config";
import Router from "./routes";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Toaster toastOptions={{ ...toastConfig }} />
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
