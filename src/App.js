import {
  BrowserRouter,
} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import Main from "./routes/Main";


function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
