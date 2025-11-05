import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        if (mounted) setUsers(res.data);
      } catch (err) {
        console.error("Error cargando usuarios:", err);
        if (mounted) setError("No se pudieron cargar los usuarios");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchUsers();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="p-6">Cargando usuarios...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Usuarios</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No hay usuarios registrados.</p>
      ) : (
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="border-b bg-gray-200 text-left">
              <th className="p-3">Nombre</th>
              <th className="p-3">Email</th>
              <th className="p-3">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 capitalize">{u.role || "usuario"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}