import React from "react";
import { Card, CardHeader, CardBody, Badge, Button } from "@heroui/react";

const alerts = [
  { message: "Meta de emisiones superada", type: "error", date: "2025-08-15", detail: "Las emisiones totales han excedido el límite anual establecido." },
  { message: "Nuevo proyecto registrado", type: "info", date: "2025-08-14", detail: "Se ha añadido el proyecto 'Captura Solar' al sistema." },
  { message: "Auditoría pendiente", type: "warning", date: "2025-08-13", detail: "La auditoría interna está programada para el 20 de agosto." }
];

const typeColor = {
  error: "danger",
  warning: "warning",
  info: "primary"
};

const Alerts: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Alertas y Notificaciones</h1>
    <div className="w-full bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
      <div className="font-bold text-lg flex justify-between items-center mb-2">
        <span>Alertas</span>
        <Button color="primary" size="sm">Nueva alerta</Button>
      </div>
      <ul className="space-y-2">
        {alerts.map((alert, idx) => (
          <li key={idx} className="flex items-center justify-between p-2 rounded transition hover:bg-carbonGray-light">
            <span className="font-semibold">{alert.message}</span>
            <Badge color={alert.type === 'Crítica' ? 'danger' : 'warning'}>{alert.type}</Badge>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Alerts;
