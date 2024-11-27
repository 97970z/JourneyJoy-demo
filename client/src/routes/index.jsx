// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import AddLocationPage from "../pages/AddLocationPage";
import VerificationPage from "../pages/VerificationPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/add-location" element={<AddLocationPage />} />
      <Route path="/verify" element={<VerificationPage />} />
    </Routes>
  );
}

export default AppRoutes;
