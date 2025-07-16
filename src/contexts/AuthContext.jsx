import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const navigate = useNavigate();
  const login = (user, password) => {
    if (user === "admin" && password === "123") {
      setUser({ user });
      localStorage.setItem("user", user);
      return true;
    }
    return false;
  };
  const logado = !!user;
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    setLoadingUser(true);
    const savedUser = localStorage.getItem("user");
    setUser(savedUser);
    setLoadingUser(false);
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, login, logout, logado, loadingUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
