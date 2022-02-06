import React,{createContext,Component} from 'react'

export const AuthContext =createContext();

class AuthContextProvider extends Component {
    state = { 
        isLogin:false,
     } 
    render() { 
        return (
            <AuthContext.Provider value={{...this.state}}>
                {/* asign children to another component */}
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;