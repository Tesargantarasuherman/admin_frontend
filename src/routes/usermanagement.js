import Dashboard from "../pages/dashboard";
import UserManagement from "../pages/userManagement/index";

const root = "";

const usermanagement = [
    {
        path: `${root}/user`,
        component: <UserManagement/>,
        navbar: true,
        sidebar: true,
    },
];

export default usermanagement;
