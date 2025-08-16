import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import AlertBanner from "../common/AlertBanner";
import { Progress } from "@heroui/react";

const data = [
  { name: 'Ene', emisiones: 4000 },
  { name: 'Feb', emisiones: 3000 },
  { name: 'Mar', emisiones: 2000 },
  { name: 'Abr', emisiones: 2780 },
  { name: 'May', emisiones: 1890 },
  { name: 'Jun', emisiones: 2390 },
  { name: 'Jul', emisiones: 3490 },
];

const Home = () => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <div className="space-y-4 xs:space-y-6">
  <h1 className="text-2xl font-semibold">Panel de Control</h1>
      
      {showAlert && (
        <AlertBanner
          type="info"
          message="Bienvenido al nuevo dashboard de BHP CarbonNet. Explora las nuevas funcionalidades."
          onClose={() => setShowAlert(false)}
        />
      )}
      
  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 md:gap-6">
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Emisiones Totales</p>
                <h3 className="text-2xl font-semibold">1,234 tCO2e</h3>
              </div>
              <Icon icon="lucide:cloud" className="text-green-500" width="24" height="24" />
            </div>
            <Progress value={60} className="mt-2" color="success" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Reducción Anual</p>
                <h3 className="text-2xl font-semibold">15%</h3>
              </div>
              <Icon icon="lucide:trending-down" className="text-blue-500" width="24" height="24" />
            </div>
            <Progress value={15} className="mt-2" color="primary" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Iniciativas Activas</p>
                <h3 className="text-2xl font-semibold">8</h3>
              </div>
              <Icon icon="lucide:zap" className="text-yellow-500" width="24" height="24" />
            </div>
            <Progress value={80} className="mt-2" color="warning" />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Cumplimiento de Metas</p>
                <h3 className="text-2xl font-semibold">75%</h3>
              </div>
              <Icon icon="lucide:check-circle" className="text-green-500" width="24" height="24" />
            </div>
            <Progress value={75} className="mt-2" color="success" />
          </CardBody>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Tendencia de Emisiones</h3>
        </CardHeader>
        <CardBody>
          <div className="h-48 xs:h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
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
    </div>
  );
};

export default Home;