import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

type IndicatorColor = "danger" | "success" | "primary" | "default" | "warning" | "secondary";

interface Indicator {
  name: string;
  value: string;
  trend: string;
  color: IndicatorColor;
}

const indicators: Indicator[] = [
  { name: "CO₂ emitido", value: "1,250 t", trend: "+2%", color: "danger" },
  { name: "Meta anual", value: "900 t", trend: "-5%", color: "success" },
  { name: "Proyectos activos", value: "7", trend: "+1", color: "primary" },
  { name: "Reducción mensual", value: "120 t", trend: "+10%", color: "success" }
];

const Indicators: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Indicadores y Gráficos</h1>
    <Card className="max-w-5xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Indicadores</CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {indicators.map((indicator, idx) => (
            <Card key={idx} className="flex flex-col items-center p-4 dashboard-bg">
              <span className="font-semibold">{indicator.name}</span>
              <span className="text-2xl font-bold mt-2">{indicator.value}</span>
              <Badge color={indicator.color} className="mt-1">{indicator.trend}</Badge>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Indicators;
