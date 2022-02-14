import React from 'react';
import API from '../services/API/Auth';
import { useNavigate } from "react-router-dom";

const AuthReducers = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return (
                action
            )
        
        default:
            return state;
    }
}

export default AuthReducers;
