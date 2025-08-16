import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";

const reports = [
  { title: "Reporte de emisiones", date: "2025-08-01", status: "Completado" },
  { title: "Auditoría interna", date: "2025-07-15", status: "Pendiente" },
  { title: "Informe mensual", date: "2025-08-10", status: "Completado" },
  { title: "Revisión de metas", date: "2025-07-30", status: "En progreso" }
];

const statusColor = {
  "Completado": "success",
  "En progreso": "primary",
  "Pendiente": "warning"
};

const Reports: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Informes</h1>
    <Card className="max-w-3xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg">Reportes recientes</CardHeader>
      <CardBody>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Título</th>
              <th className="py-2">Fecha</th>
              <th className="py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx}>
                <td className="py-2">{report.title}</td>
                <td className="py-2">{report.date}</td>
                <td className="py-2"><Badge color={statusColor[report.status]}>{report.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  </div>
);

export default Reports;
