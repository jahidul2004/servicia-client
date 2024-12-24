import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GoogleAuthProvider,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const updateUserProfile = (user) => {
        return updateProfile(auth.currentUser, user);
    };

    const data = {
        user,
        setUser,
        registerUser,
        loginUser,
        signOutUser,
        updateUserProfile,
        loading,
        setLoading,
        googleLogin,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
