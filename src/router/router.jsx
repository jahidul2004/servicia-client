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
import Services from "../pages/services/Services";
import MyServices from "../pages/services/MyServices";
import MyReviews from "../pages/reviews/MyReviews";

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
                        `https://servicia-server.vercel.app/service/${params.id}`
                    );
                    return res.data;
                },
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: async () => {
                    const res = await axios.get(
                        "https://servicia-server.vercel.app/services"
                    );
                    return res.data;
                },
            },
            {
                path: "/myServices/:email",
                element: (
                    <PrivateRoute>
                        <MyServices></MyServices>
                    </PrivateRoute>
                ),
            },
            {
                path: "/myReviews/:email",
                element: (
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
