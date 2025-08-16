import React from "react";
import { Card, CardHeader, CardBody, Button, Input, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

const Emissions = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Registro de Emisiones</h1>
      <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="font-bold text-lg">Emisiones</CardHeader>
        <CardBody>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Fuente</th>
                <th className="py-2">Emisión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Combustión de Vehículos</td>
                <td className="py-2">125.5</td>
              </tr>
              <tr>
                <td className="py-2">Consumo Eléctrico</td>
                <td className="py-2">300.2</td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Emissions;