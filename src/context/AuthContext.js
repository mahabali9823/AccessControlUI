import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Auto login after refresh
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userName, password) => {
        const users = {
            student: { role: 'student' },
            teacher: { role: 'teacher' },
            principal: { role: 'principal' },
        };

        if (users[userName] && password === '123') {
            localStorage.setItem('user', JSON.stringify(users[userName]));
            setUser(users[userName]);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;