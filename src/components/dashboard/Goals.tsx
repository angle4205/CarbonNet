// Formatea números con punto como miles y coma como decimal
function formatNumber(num) {
  const parts = Number(num).toFixed(1).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(',');
}
import React from "react";
import { Card, CardHeader, CardBody, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const goals = [
  { name: "Reducir emisiones 10%", status: "En progreso", description: "Implementar mejoras en procesos industriales para reducir emisiones." },
  { name: "Certificación ISO", status: "Completado", description: "Se obtuvo la certificación ISO 14001 en gestión ambiental." },
  { name: "Optimizar transporte", status: "Pendiente", description: "Planificar rutas y renovar flota para menor impacto ambiental." }
];

const statusColor: Record<string, "success" | "primary" | "warning"> = {
  "Completado": "success",
  "En progreso": "primary",
  "Pendiente": "warning"
};

const Goals: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl font-semibold">Metas y Objetivos</h1>
      <div className="bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
        <div className="font-bold text-lg flex justify-between items-center mb-2">
          <span>Metas</span>
          <Button color="primary" size="sm" startContent={<Icon icon="lucide:plus" />}>Nueva meta</Button>
        </div>
        <div className="space-y-2">
          {goals.map((goal, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex items-center justify-between p-2 rounded cursor-pointer transition hover:bg-carbonGray-light"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="font-semibold">{goal.name.replace(/(\d+[\.,]?\d*)/g, (m) => formatNumber(m.replace(/,/g, '.')))}</span>
                <Badge color={statusColor[goal.status]}>{goal.status}</Badge>
              </div>
              {openIdx === idx && (
                <div className="bg-carbonGray-light rounded p-3 mb-2 text-sm text-gray-700 flex flex-col items-center">
                  <span>{goal.description}</span>
                  <div className="flex gap-2 mt-2">
                    <Button color="primary" size="sm" variant="light" startContent={<Icon icon="lucide:eye" />}>Ver detalle</Button>
                    <Button color="default" size="sm" variant="light" startContent={<Icon icon="lucide:edit" />}>Editar</Button>
                    <Button color="danger" size="sm" variant="light" startContent={<Icon icon="lucide:trash" />}>Eliminar</Button>
                    <Button color="default" size="sm" variant="light" onClick={() => setOpenIdx(null)}>Cerrar</Button>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;