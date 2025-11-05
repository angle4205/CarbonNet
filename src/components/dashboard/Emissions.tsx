
import React from "react";
import { Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";

const emissions = [
  { source: "Combustión de Vehículos", amount: 900, date: "2025-08-01" },
  { source: "Consumo Eléctrico", amount: 334, date: "2025-08-02" }
];

function formatNumber(num) {
  // Formatea el número con punto como separador de miles y coma como decimal: 1.234,5
  const parts = num.toFixed(1).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(',');
}

function Emissions() {
  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl font-semibold">Registro de Emisiones</h1>
      <div className="w-full bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
        <div className="flex items-center justify-between font-bold text-lg mb-2">
          <span>Emisiones recientes</span>
          <Button color="primary" size="sm" startContent={<Icon icon="lucide:plus" />}>Nuevo registro</Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Fuente</th>
                <th className="py-2">Cantidad (tCO₂e)</th>
                <th className="py-2">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {emissions.map((emission, idx) => (
                <tr key={idx} className="hover:bg-carbonGray-light transition">
                  <td className="py-2 font-semibold">{emission.source}</td>
                  <td className="py-2">{formatNumber(emission.amount)}</td>
                  <td className="py-2 text-xs text-gray-500">{emission.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Emissions;
 