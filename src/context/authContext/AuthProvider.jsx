import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const data = {
        name: "John Doe",
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
