import { useContext, useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import NavContextProvider from "./contexts/NavContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import Login from "./pages/login";
import Main from "./routes/Main";
import MainPage from "./routes/main/MainPage";
import 'react-calendar/dist/Calendar.css';

function App() {

  return (
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <NavContextProvider>
              <MainPage />
            </NavContextProvider>
          </BookContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
  );
}

export default App;
