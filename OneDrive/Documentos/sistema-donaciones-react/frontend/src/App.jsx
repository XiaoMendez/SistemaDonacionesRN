import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

// Pages
import Campaigns from "./pages/Campaigns";
import CampaignCreate from "./pages/CampaignCreate";
import Donations from "./pages/Donations";
import Users from "./pages/Users";

// Auth pages (faltan, los crearé si quieres)
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout general
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private / Auth Required */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/campaigns" replace />} />

        <Route path="campaigns" element={<Campaigns />} />
        <Route path="campaigns/create" element={<CampaignCreate />} />

        <Route path="donations" element={<Donations />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}
