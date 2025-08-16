import React from "react";
import { Card, CardHeader, CardBody, Button, Input, Select, SelectItem, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";

const emissionsData = [
  { source: "Combustión de Vehículos", value: 125.5, detail: "Emisiones generadas por la flota de transporte." },
  { source: "Consumo Eléctrico", value: 300.2, detail: "Emisiones asociadas al consumo de energía eléctrica." }
];

const Emissions = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Registro de Emisiones</h1>
      <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="font-bold text-lg flex justify-between items-center">
          <span>Emisiones</span>
          <Button color="primary" size="sm" startContent={<Icon icon="lucide:plus" />}>
            Nueva emisión
          </Button>
        </CardHeader>
        <CardBody>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Fuente</th>
                <th className="py-2">Emisión (tCO₂e)</th>
              </tr>
            </thead>
            <tbody>
              {emissionsData.map((emission, idx) => (
                <React.Fragment key={idx}>
                  <tr
                    className="hover:bg-carbonGray-light transition cursor-pointer"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <td className="py-2 font-semibold flex items-center gap-2">
                      <Icon icon="lucide:factory" className="text-green-500" width={18} />
                      {emission.source}
                    </td>
                    <td className="py-2">
                      <Badge color="primary">{emission.value}</Badge>
                    </td>
                  </tr>
                  {openIdx === idx && (
                    <tr>
                      <td colSpan={2} className="py-2 bg-carbonGray-light">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-sm text-gray-700">{emission.detail}</span>
                          <div className="flex gap-2 mt-2">
                            <Button color="primary" size="xs" variant="light" startContent={<Icon icon="lucide:eye" />}>Ver detalle</Button>
                            <Button color="default" size="xs" variant="light" startContent={<Icon icon="lucide:edit" />}>Editar</Button>
                            <Button color="danger" size="xs" variant="light" startContent={<Icon icon="lucide:trash" />}>Eliminar</Button>
                            <Button color="default" size="xs" variant="light" onClick={() => setOpenIdx(null)}>Cerrar</Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Emissions;