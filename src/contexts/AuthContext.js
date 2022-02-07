import React,{createContext,Component} from 'react'

export const AuthContext =createContext();

class AuthContextProvider extends Component {
    state = { 
        isLogin:false,
     } 
     toggleAuth =()=>{
         this.setState({isLogin :!this.state.isLogin})
     }
    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
                {/* asign children to another component */}
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;