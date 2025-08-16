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
      <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="font-bold text-lg">Alertas</CardHeader>
        <CardBody>
          <div className="space-y-2">
            {alerts.map((alert, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex items-center justify-between p-3 rounded cursor-pointer transition hover:bg-carbonGray-light`}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <div>
                    <span className="font-semibold">{alert.message}</span>
                    <span className="block text-xs text-gray-500">{alert.date}</span>
                  </div>
                  <Badge color={typeColor[alert.type]}>{alert.type}</Badge>
                </div>
                {openIdx === idx && (
                  <div className="bg-carbonGray-light rounded p-3 mb-2 text-sm text-gray-700 flex flex-col items-center">
                    <span>{alert.detail}</span>
                    <Button
                      size="xs"
                      variant="light"
                      color="default"
                      className="mt-2"
                      onClick={() => setOpenIdx(null)}
                    >
                      Cerrar
                    </Button>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;
