import React from "react";
import { Card, CardHeader, CardBody, Badge } from "@heroui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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

// Datos simulados para los gráficos
const chartData = [
  { name: 'Ene', emisiones: 4000 },
  { name: 'Feb', emisiones: 3000 },
  { name: 'Mar', emisiones: 2000 },
  { name: 'Abr', emisiones: 2780 },
  { name: 'May', emisiones: 1890 },
  { name: 'Jun', emisiones: 2390 },
  { name: 'Jul', emisiones: 3490 },
];

const initiativesData = [
  { name: 'Captura', value: 400 },
  { name: 'Reforestación', value: 300 },
  { name: 'Eficiencia', value: 300 },
  { name: 'Energía renovable', value: 200 },
];

const goalsData = [
  { name: '2023', meta: 1000, real: 1250 },
  { name: '2024', meta: 900, real: 1100 },
  { name: '2025', meta: 800, real: 950 },
  { name: '2026', meta: 700, real: 800 },
];

const alertsData = [
  { name: 'Ene', alertas: 2 },
  { name: 'Feb', alertas: 1 },
  { name: 'Mar', alertas: 3 },
  { name: 'Abr', alertas: 0 },
  { name: 'May', alertas: 2 },
  { name: 'Jun', alertas: 1 },
  { name: 'Jul', alertas: 4 },
];

const pieColors = ["#059669", "#10B981", "#2563eb", "#facc15"];

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
    {/* Gráfico de emisiones */}
    <Card className="max-w-5xl mx-auto dashboard-bg">
      <CardHeader className="font-bold text-lg">Emisiones mensuales proyectadas</CardHeader>
      <CardBody>
        <div className="h-48 xs:h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="emisiones" 
                stroke="#059669" 
                fill="#10B981" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
    {/* Gráfico de iniciativas de mitigación */}
    <Card className="max-w-5xl mx-auto dashboard-bg">
      <CardHeader className="font-bold text-lg">Distribución de iniciativas de mitigación</CardHeader>
      <CardBody>
        <div className="h-64 flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={initiativesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                outerRadius={60}
                label
              >
                {initiativesData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                iconSize={14}
                wrapperStyle={{
                  color: "#222",
                  fontWeight: 500,
                  fontSize: "1rem"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
    {/* Gráfico de metas vs. emisiones reales */}
    <Card className="max-w-5xl mx-auto dashboard-bg">
      <CardHeader className="font-bold text-lg">Metas vs. Emisiones reales</CardHeader>
      <CardBody>
        <div className="h-48 xs:h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={goalsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="meta" fill="#2563eb" name="Meta" />
              <Bar dataKey="real" fill="#059669" name="Real" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
    {/* Gráfico de alertas mensuales */}
    <Card className="max-w-5xl mx-auto dashboard-bg">
      <CardHeader className="font-bold text-lg">Alertas mensuales</CardHeader>
      <CardBody>
        <div className="h-48 xs:h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={alertsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="alertas" stroke="#facc15" name="Alertas" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Indicators;
