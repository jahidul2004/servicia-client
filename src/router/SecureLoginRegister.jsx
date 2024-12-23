import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate } from "react-router-dom";

const SecureLoginRegister = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-[#357ef0] mx-auto"></span>
            </div>
        );
    }

    if (!user) {
        return children;
    }
    return <Navigate to="/" replace={true}></Navigate>;
};

export default SecureLoginRegister;
