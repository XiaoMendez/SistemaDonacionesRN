import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Sistema Donaciones</h1>
      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/campaigns">Campañas</Link>
        <Link to="/donations">Donaciones</Link>
        <Link to="/users">Usuarios</Link>
      </div>
    </nav>
  );
}
