import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/signin",
        element: <div>Signin</div>,
    },
    {
        path: "/signup",
        element: <div>Signup</div>,
    },
    {
        path: "/dashboard",
        element: <div>Dashboard</div>,
    },
    {
        path: "/profile",
        element: <div>Profile</div>,
    },

]);

export default router;