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
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <NavContextProvider>
              <Main />
            </NavContextProvider>
          </BookContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
