import {
  BrowserRouter,
} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import Main from "./routes/Main";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <BookContextProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </BookContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
