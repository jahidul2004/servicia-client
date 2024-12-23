import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const data = {
        user,
        setUser,
        registerUser,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
