import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';
import './Navbar.css'
import Avatar from '../../img/logo.png'
import { NavContext } from '../../contexts/NavContext';
const Navbar = () => {
    const { isNav, none, visible,toggleNav } = useContext(NavContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    const nav = isNav ? visible : none;
    const { isLogin, toggleAuth } = useContext(AuthContext);
    return (
        <div style={{ background: theme.bg, color: theme.color }} className="nav">
            <div style={{display:nav.css}}>
                <h1>Logo</h1>
            </div>
            <div>
                <div className="right-nav">
                    <i onClick={()=>toggleNav()}>
                        <ion-icon name="menu"></ion-icon>
                    </i>
                    <img src={Avatar} alt="" srcset="" width={45} />
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
