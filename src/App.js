import {
  BrowserRouter,
} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import NavContextProvider from "./contexts/NavContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import Main from "./routes/Main";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <BookContextProvider>
          <NavContextProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
          </NavContextProvider>
        </BookContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
