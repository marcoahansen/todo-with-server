import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Edit } from "../pages/Edit/Edit";
import { New } from "../pages/New/New";
import { Layout } from "../components/Layout/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="new" element={<New/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
