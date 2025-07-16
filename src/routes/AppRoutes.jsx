import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Edit } from "../pages/Edit/Edit";
import { New } from "../pages/New/New";
import { Layout } from "../components/Layout/Layout";
import { useAuth } from "../contexts/AuthContext";
import { Login } from "../pages/Login/Login";

const PrivateRoutes = ({ children }) => {
  const { logado } = useAuth();
  return logado ? children : <Navigate to="/login" />;
};

export const AppRoutes = () => {
  const { logado } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoutes>
                <Edit />
              </PrivateRoutes>
            }
          />
          <Route
            path="new"
            element={
              <PrivateRoutes>
                <New />
              </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
