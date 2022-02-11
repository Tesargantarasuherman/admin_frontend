import React, { createContext, Component } from 'react'

export const NavContext = createContext();

class NavContextProvider extends Component {
    state = {
        isNav: true,
        visible: {
            css: 'block',
        },
        none: {
            css: 'none',
        },
    }
    toggleNav = () => {
        this.setState({ isNav: !this.state.isNav });
    }
    render() {
        return (
            <NavContext.Provider value={{ ...this.state, toggleNav: this.toggleNav }}>
                {/* asign children to another component */}
                {this.props.children}
            </NavContext.Provider>
        );
    }
}

export default NavContextProvider;