import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../common/NotFound";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound></NotFound>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
]);

export default router;
