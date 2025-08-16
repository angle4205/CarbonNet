import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const sidebarItems = [
  { icon: "lucide:home", label: "Inicio", path: "/dashboard" },
  { icon: "lucide:clipboard-list", label: "Registro de emisiones", path: "/dashboard/emissions" },
  { icon: "lucide:target", label: "Metas y objetivos", path: "/dashboard/goals" },
  { icon: "lucide:bar-chart-2", label: "Indicadores y gráficos", path: "/dashboard/indicators" },
  { icon: "lucide:file-text", label: "Informes", path: "/dashboard/reports" },
  { icon: "lucide:zap", label: "Iniciativas de mitigación", path: "/dashboard/initiatives" },
  { icon: "lucide:git-branch", label: "Simulación de escenarios", path: "/dashboard/scenarios" },
  { icon: "lucide:bell", label: "Alertas y notificaciones", path: "/dashboard/alerts" },
  { icon: "lucide:history", label: "Historial/Auditoría", path: "/dashboard/history" },
  { icon: "lucide:users", label: "Gestión de usuarios y roles", path: "/dashboard/users" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
  <aside className="dashboard-bg w-20 min-h-screen p-4 border-r border-gray-300 dark:border-carbonDark">
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "font-bold underline"
                    : "opacity-80 hover:opacity-100"
                } dashboard-bg group`}
              >
                <Icon
                  icon={item.icon}
                  width="28"
                  height="28"
                  className={`transition-colors ${location.pathname === item.path ? "text-green-400" : ""} group-hover:text-green-400`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;