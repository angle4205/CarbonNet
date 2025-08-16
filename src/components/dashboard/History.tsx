import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";

const history = [
  { action: "Login", date: "2025-08-15 09:00" },
  { action: "Actualización de metas", date: "2025-08-14 16:30" },
  { action: "Nuevo proyecto", date: "2025-08-13 11:20" }
];

const History: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Historial / Auditoría</h1>
    <Card className="max-w-2xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Historial</CardHeader>
      <CardBody>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Acción</th>
              <th className="py-2">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={idx}>
                <td className="py-2">{item.action}</td>
                <td className="py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  </div>
);

export default History;
