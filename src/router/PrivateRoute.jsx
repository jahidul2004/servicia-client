import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <p>Loading...</p>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
