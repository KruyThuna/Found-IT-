import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import Tracking from "./pages/Tracking";
import AdminLogin from "./pages/AdminLogin";

import ProfileDetail from "./pages/ProfileDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProfileDetail" element={<ProfileDetail />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lost-items" element={<LostItems />} />
          <Route path="/found-items" element={<FoundItems />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
