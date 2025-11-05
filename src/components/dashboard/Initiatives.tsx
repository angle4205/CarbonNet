import React from "react";
import { Card, CardHeader, CardBody, Badge, Button, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

const initiatives = [
  { name: "Energía solar", progress: 80, description: "Instalación de paneles solares en planta principal." },
  { name: "Reforestación", progress: 60, description: "Plantación de árboles en zonas degradadas." },
  { name: "Optimización logística", progress: 45, description: "Mejora de rutas y reducción de emisiones en transporte." }
];

const Initiatives: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Iniciativas de Mitigación</h1>
      <div className="w-full bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
        <div className="font-bold text-lg mb-2">Iniciativas</div>
        <div className="space-y-2">
          {initiatives.map((initiative, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex items-center justify-between p-2 rounded cursor-pointer transition hover:bg-carbonGray-light"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:leaf" className="text-orange-500" width={20} />
                  <span className="font-semibold">{initiative.name}</span>
                </div>
                <div className="flex items-center gap-2 min-w-[90px]">
                  <Progress value={initiative.progress} color="primary" className="w-16" />
                  <Badge color="primary">{initiative.progress}%</Badge>
                </div>
              </div>
              {openIdx === idx && (
                <div className="bg-carbonGray-light rounded p-3 mb-2 text-sm text-gray-700 flex flex-col items-center">
                  <span>{initiative.description}</span>
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

export default Initiatives;
