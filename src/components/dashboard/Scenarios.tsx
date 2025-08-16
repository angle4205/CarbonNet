import React from "react";
import { Card, CardHeader, CardBody, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const scenarios = [
  { name: "Escenario base", impact: "1,250 t CO₂", description: "Sin acciones de mitigación." },
  { name: "Reducción 10%", impact: "1,125 t CO₂", description: "Implementando eficiencia energética." },
  { name: "Reducción 20%", impact: "1,000 t CO₂", description: "Incluye reforestación y energía renovable." }
];

const Scenarios: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Simulación de Escenarios</h1>
      <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="font-bold text-lg flex justify-between items-center">
          <span>Escenarios</span>
          <Button color="primary" size="sm" startContent={<Icon icon="lucide:plus" />}>
            Nuevo escenario
          </Button>
        </CardHeader>
        <CardBody>
          <div className="space-y-2">
            {scenarios.map((scenario, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex items-center justify-between p-3 rounded cursor-pointer transition hover:bg-carbonGray-light`}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:activity" className="text-green-500" width={22} />
                    <span className="font-semibold">{scenario.name}</span>
                  </div>
                  <Badge color="success">{scenario.impact}</Badge>
                </div>
                {openIdx === idx && (
                  <div className="bg-carbonGray-light rounded p-3 mb-2 text-sm text-gray-700 flex flex-col items-center">
                    <span>{scenario.description}</span>
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

export default Scenarios;
