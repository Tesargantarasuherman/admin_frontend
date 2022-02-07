import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    const { isLogin, toggleAuth } = useContext(AuthContext);
    return (
        <nav style={{ background: theme.bg, color: theme.color, }}>
            <h1>Context</h1>
            <div onClick={toggleAuth}>
                {isLogin ? 'Logged in' : 'Logged out'}
            </div>
            <ThemeToggle />
        </nav>
    );
}

export default Navbar;
