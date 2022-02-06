import Login from "../pages/login/index";

const root = "/";

const user = [
    {
        path: `${root}/`,
        component: <Login/>,
        navbar: false,
    },
];

export default user;
