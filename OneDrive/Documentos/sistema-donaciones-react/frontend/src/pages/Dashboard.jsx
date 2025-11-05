import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <p className="mb-6 text-gray-700">Bienvenido al sistema de donaciones</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/campaigns" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-bold">Campañas</h2>
          <p className="text-gray-500 text-sm">Gestionar campañas de donación</p>
        </Link>

        <Link to="/donations" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-bold">Donaciones</h2>
          <p className="text-gray-500 text-sm">Ver donaciones recibidas</p>
        </Link>

        <Link to="/users" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-bold">Usuarios</h2>
          <p className="text-gray-500 text-sm">Administrar usuarios</p>
        </Link>
      </div>
    </div>
  );
}
