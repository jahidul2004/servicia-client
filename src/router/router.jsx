import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../common/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/addService/AddService";
import SecureLoginRegister from "./SecureLoginRegister";

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
                element: (
                    <SecureLoginRegister>
                        <Login></Login>
                    </SecureLoginRegister>
                ),
            },
            {
                path: "/register",
                element: (
                    <SecureLoginRegister>
                        <Register></Register>
                    </SecureLoginRegister>
                ),
            },
            {
                path: "/addService",
                element: (
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
