import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Edit } from "../pages/Edit/Edit";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};
