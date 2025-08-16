import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

const scenarios = [
  { name: "Escenario base", impact: "1,250 t CO₂" },
  { name: "Reducción 10%", impact: "1,125 t CO₂" },
  { name: "Reducción 20%", impact: "1,000 t CO₂" }
];

const Scenarios: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Simulación de Escenarios</h1>
    <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Escenarios</CardHeader>
      <CardBody>
        <div className="space-y-2">
          {scenarios.map((scenario, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded dashboard-bg">
              <span>{scenario.name}</span>
              <Badge color="success">{scenario.impact}</Badge>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Scenarios;
