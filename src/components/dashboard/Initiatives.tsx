import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

const initiatives = [
  { name: "Energía solar", progress: "80%" },
  { name: "Reforestación", progress: "60%" },
  { name: "Optimización logística", progress: "45%" }
];

const Initiatives: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Iniciativas de Mitigación</h1>
    <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Iniciativas</CardHeader>
      <CardBody>
        <div className="space-y-2">
          {initiatives.map((initiative, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded dashboard-bg">
              <span>{initiative.name}</span>
              <Badge color="primary">{initiative.progress}</Badge>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Initiatives;
