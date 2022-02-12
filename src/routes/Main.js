
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../routes/index";
import Navbar from "../components/Navbar/Navbar.js";
import Sidebar from '../components/Sidebar/Sidebar';

function Main(props) {
    const main = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <>
            {/* Navbar ----------------------------- */}
            <Routes>
                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar Logout={props.Logout} handleClick={props.handleClick} theme={props.theme} setThemeAction={props.setThemeAction} />
                        } />;
                })}
            </Routes>

            {/* ---------------------------------- */}
            {/* Render Sidebar */}
            <div style={main}>
                <Routes>
                    {routes.map((route) => {
                        if (route.sidebar)
                            return <Route path={route.path} element={<Sidebar />} />;
                    })}
                </Routes>

                {/* Render Page */}
                <div style={{ flex: 5 }}>
                    <div style={{ margin: '20px' }}>
                        <Routes>
                            {routes.map((route) => {
                                return <Route path={route.path} element={route.component} />
                            })}
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main