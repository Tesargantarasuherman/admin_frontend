import React,{createContext,Component} from 'react'

export const ThemeContext =createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLogin:false,
     } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {/* asign children to another component */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;