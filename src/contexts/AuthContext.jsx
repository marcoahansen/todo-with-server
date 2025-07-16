import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user, password) => {
    if (user === "admin" && password === "123") {
      setUser({ user });
      return true;
    }
    return false;
  };
  const logado = !!user;

  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout, logado }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
