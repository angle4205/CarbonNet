// Formatea números con punto como miles y coma como decimal
function formatNumber(num) {
  const parts = Number(num).toFixed(1).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(',');
}
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";

const history = [
  { action: "Login", date: "2025-08-15 09:00" },
  { action: "Actualización de metas", date: "2025-08-14 16:30" },
  { action: "Nuevo proyecto", date: "2025-08-13 11:20" }
];

function History() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Historial / Auditoría</h1>
      <div className="w-full bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
        <div className="font-bold text-lg mb-2">Historial</div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Acción</th>
              <th className="py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={idx}>
                <td className="py-2">{item.action}</td>
                <td className="py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
