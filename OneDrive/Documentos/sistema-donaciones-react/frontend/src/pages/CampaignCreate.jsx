import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CampaignCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", goalAmount: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        navigate("/campaigns");
      } else {
        alert("Error al crear campaña");
      }
    } catch (error) {
      console.error(error);
      alert("Error en el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Crear Nueva Campaña</h2>

        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          name="goalAmount"
          placeholder="Meta de Recaudo ($)"
          value={form.goalAmount}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded mb-6"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          {loading ? "Creando..." : "Crear Campaña"}
        </button>
      </form>
    </div>
  );
}