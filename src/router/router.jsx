import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../common/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound></NotFound>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
