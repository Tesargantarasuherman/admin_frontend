import Dashboard from "../pages/dashboard";

const root = "/dashboard";

const user = [
    {
        path: `${root}/`,
        component: <Dashboard/>,
        navbar: true,
        sidebar: true,
    },
];

export default user;
