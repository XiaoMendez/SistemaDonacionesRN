import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/campaigns")
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error("Error cargando campañas:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campañas de Donación</h1>
        <Link
          to="/campaigns/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          + Nueva Campaña
        </Link>
      </div>

      {campaigns.length === 0 ? (
        <p className="text-gray-600">No hay campañas registradas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((camp) => (
            <div
              key={camp._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold mb-2">{camp.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{camp.description}</p>
              <p className="font-semibold text-green-600">
                Meta: ${camp.goalAmount}
              </p>
            </div>
          ))}
        </div>
      )}
    </di