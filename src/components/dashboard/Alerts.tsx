import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

const alerts = [
  { message: "Meta de emisiones superada", type: "error" },
  { message: "Nuevo proyecto registrado", type: "info" },
  { message: "Auditoría pendiente", type: "warning" }
];

const typeColor = {
  error: "danger",
  warning: "warning",
  info: "primary"
};

const Alerts: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Alertas y Notificaciones</h1>
    <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Alertas</CardHeader>
      <CardBody>
        <div className="space-y-2">
          {alerts.map((alert, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded dashboard-bg">
              <span>{alert.message}</span>
              <Badge color={typeColor[alert.type]}>{alert.type}</Badge>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Alerts;
