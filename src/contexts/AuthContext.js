import React, { createContext, Component, useReducer } from 'react'
import AuthReducers from '../reducers/AuthReducers';
import API from '../services/API/Auth';

export const AuthContext = createContext();
class AuthContextProvider extends Component {

    state = {
        isLogin: false,
    }
    toggleAuth = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }
    postLogin = (data) => {
        API.Login(data).then(res => {
            this.setState({ isLogin: true })
            localStorage.setItem("data_user", JSON.stringify(res.data.data));
        }).catch(err =>
            console.log(err)
        )
    }
    render() {

        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth, postLogin: this.postLogin }}>
                {/* asign children to another component */}
                {this.props.children}
            </AuthContext.Provider>
        );
    }

}

export default AuthContextProvider;