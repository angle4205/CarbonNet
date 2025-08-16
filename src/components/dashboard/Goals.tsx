import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

const goals = [
  { name: "Reducir emisiones 10%", status: "En progreso" },
  { name: "Certificación ISO", status: "Completado" },
  { name: "Optimizar transporte", status: "Pendiente" }
];

const statusColor: Record<string, "success" | "primary" | "warning"> = {
  "Completado": "success",
  "En progreso": "primary",
  "Pendiente": "warning"
};

const Goals: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Metas y Objetivos</h1>
    <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Metas</CardHeader>
      <CardBody>
        <div className="space-y-2">
          {goals.map((goal, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded dashboard-bg">
              <span>{goal.name}</span>
              <Badge color={statusColor[goal.status]}>{goal.status}</Badge>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Goals;