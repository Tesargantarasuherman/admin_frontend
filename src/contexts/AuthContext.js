import React, { createContext, Component, useReducer, useState,useEffect } from 'react'
import AuthReducers from '../reducers/AuthReducers';
import API from '../services/API/Auth';
import {
    useNavigate
} from "react-router-dom";
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [dataLogin, setDataLogin] = useState(localStorage.getItem("data_user"));
    const toggleAuth = () => {
        setIsLogin(true)
    }
    const postLogin = (data) => {
        API.Login(data).then(res => {
            setIsLogin(true)
            localStorage.setItem("data_user", JSON.stringify(res.data.data));
        }).catch(err =>
            console.log(err)
        )
    }
    useEffect(() => {
        if (dataLogin) {
            setIsLogin(true)
        }
        else {
            setIsLogin(false)
        }
    },[])
    return (
        <AuthContext.Provider value={{ isLogin:isLogin,toggleAuth: toggleAuth, postLogin: postLogin }}>
            {/* asign children to another component */}
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;