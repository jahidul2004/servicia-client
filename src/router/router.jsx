import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../common/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/addService/AddService";
import SecureLoginRegister from "./SecureLoginRegister";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import axios from "axios";

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
            {
                path: "serviceDetails/:id",
                element: (
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    const res = await axios.get(
                        `http://localhost:3000/service/${params.id}`
                    );
                    return res.data;
                },
            },
        ],
    },
]);

export default router;
