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
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Metas y Objetivos</h1>
      <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="font-bold text-lg flex justify-between items-center">
          <span>Metas</span>
          <Button color="primary" size="sm" startContent={<Icon icon="lucide:plus" />}>
            Nueva meta
          </Button>
        </CardHeader>
        <CardBody>
          <div className="space-y-2">
            {goals.map((goal, idx) => (
              <React.Fragment key={idx}>
                <div
                  className="flex items-center justify-between p-2 rounded cursor-pointer transition hover:bg-carbonGray-light"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="font-semibold">{goal.name}</span>
                  <Badge color={statusColor[goal.status]}>{goal.status}</Badge>
                </div>
                {openIdx === idx && (
                  <div className="bg-carbonGray-light rounded p-3 mb-2 text-sm text-gray-700 flex flex-col items-center">
                    <span>{goal.description}</span>
                    <div className="flex gap-2 mt-2">
                      <Button color="primary" size="xs" variant="light" startContent={<Icon icon="lucide:eye" />}>Ver detalle</Button>
                      <Button color="default" size="xs" variant="light" startContent={<Icon icon="lucide:edit" />}>Editar</Button>
                      <Button color="danger" size="xs" variant="light" startContent={<Icon icon="lucide:trash" />}>Eliminar</Button>
                      <Button color="default" size="xs" variant="light" onClick={() => setOpenIdx(null)}>Cerrar</Button>
                    </div>
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

export default Goals;