import React, { useState } from "react";
import { Card, CardHeader, CardBody, Badge, Button } from "@heroui/react";

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

const Reports: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Informes</h1>
      <Card className="max-w-3xl mx-auto mb-6 dashboard-bg">
        <CardHeader className="flex items-center justify-between font-bold text-lg">
          <span>Reportes recientes</span>
          <div className="flex gap-2">
            <Button color="primary" size="sm">
              <span className="hidden sm:inline">Nuevo informe</span>
              <span className="sm:hidden">+</span>
            </Button>
            <Button color="default" size="sm">
              <span className="hidden sm:inline">Descargar todo</span>
              <span className="sm:hidden">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6"/>
                </svg>
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="w-full overflow-x-auto">
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
                  <React.Fragment key={idx}>
                    <tr
                      className="hover:bg-carbonGray-light transition cursor-pointer"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      aria-expanded={openIdx === idx}
                    >
                      <td className="py-2 font-semibold">{report.title}</td>
                      <td className="py-2 text-xs text-gray-500">{report.date}</td>
                      <td className="py-2">
                        <Badge color={statusColor[report.status]}>{report.status}</Badge>
                      </td>
                    </tr>
                    {openIdx === idx && (
                      <tr>
                        <td colSpan={3} className="py-2 bg-carbonGray-light">
                          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                            <Button color="primary" size="xs" variant="light">Ver</Button>
                            <Button color="default" size="xs" variant="light">Descargar</Button>
                            <Button color="danger" size="xs" variant="light">Eliminar</Button>
                            <Button color="default" size="xs" variant="light" onClick={() => setOpenIdx(null)}>Cerrar</Button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Reports;
