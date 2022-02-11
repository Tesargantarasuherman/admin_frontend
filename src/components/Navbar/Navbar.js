import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';
import './Navbar.css'
import Avatar from '../../img/logo.png'
const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    const { isLogin, toggleAuth } = useContext(AuthContext);
    return (
        <div style={{ background: theme.bg, color: theme.color, }} className="nav">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <div className="right-nav">
                    <img src={Avatar} alt="" srcset="" width={45}/>
                    {/* <div onClick={toggleAuth}>
                        {isLogin ? 'Logged in' : 'Logged out'}
                    </div>
                    <ThemeToggle /> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
