import React, { useState } from "react";
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

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {!collapsed && (
        <aside className={`dashboard-bg min-h-screen border-r border-gray-300 dark:border-carbonDark flex-shrink-0 flex flex-col justify-between w-16 sm:w-20 p-2 sm:p-4`}>
          <nav>
            <ul className="space-y-1 sm:space-y-2">
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
                      width="22"
                      height="22"
                      className={`transition-colors ${location.pathname === item.path ? "text-green-400" : ""} group-hover:text-green-400 sm:w-7 sm:h-7`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center pb-2">
            <button
              className="bg-green-500 text-white border border-white rounded-full p-2 shadow"
              onClick={() => setCollapsed(true)}
              aria-label="Ocultar barra lateral"
            >
              <Icon icon="lucide:chevron-left" width="20" height="20" />
            </button>
          </div>
        </aside>
      )}
      {collapsed && (
        <button
          className="fixed bottom-4 left-4 z-[9999] border border-white rounded-full p-2 shadow"
          style={{ backgroundColor: '#22c55e !important', color: '#fff !important' }}
          onClick={() => setCollapsed(false)}
          aria-label="Mostrar barra lateral"
        >
          <Icon icon="lucide:chevron-right" width="20" height="20" style={{ color: '#fff !important' }} />
        </button>
      )}
    </>
  );
};

export default Sidebar;