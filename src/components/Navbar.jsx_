import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const {isLogin,toggleAuth} = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.bg, color: theme.color, }}>
              <h1>Context</h1>
              <div onClick={toggleAuth}>
                {isLogin ?'Logged in':'Logged out'}
              </div>
              <ThemeToggle />
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
  );
}

export default Navbar;