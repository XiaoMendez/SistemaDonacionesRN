import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchDonations = async () => {
      try {
        const res = await API.get("/donations");
        if (mounted) setDonations(res.data);
      } catch (err) {
        console.error("Error cargando donaciones:", err);
        if (mounted) setError("No se pudieron cargar las donaciones");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchDonations();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="p-6">Cargando donaciones...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Donaciones recibidas</h1>

      {donations.length === 0 ? (
        <p className="text-gray-600">No hay donaciones registradas.</p>
      ) : (
        <div className="space-y-4">
          {donations.map((d) => (
            <div key={d._id} className="bg-white p-4 rounded-xl shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">{d.donorName || d.email}</h2>
                  <p className="text-sm text-gray-500">{d.message}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${d.amount}</p>
                  <p className="text-sm text-gray-500">{new Date(d.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
