import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const login = (user, token) => {setUser(user);setAccessToken(token);};
    const logout = () => {setUser(null);setAccessToken(null);};
    return (
        <AuthContext.Provider
            value={{ user, accessToken, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;