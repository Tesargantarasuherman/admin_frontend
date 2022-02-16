import {
    BrowserRouter,
} from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Login from "../../pages/login";
import Main from "../../routes/Main";
function MainPage() {
    const { isLogin } = useContext(AuthContext)
    return (
        <BrowserRouter>
            {
                isLogin ?
                    (
                        <Main />
                    )
                    :
                    (
                        <Login />
                    )
            }
        </BrowserRouter>
    )
}

export default MainPage