import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const sidebarItems = [
  { icon: "lucide:home", label: "Inicio", path: "/dashboard" },
  { icon: "lucide:clipboard-list", label: "Emisiones", path: "/dashboard/emissions" },
  { icon: "lucide:target", label: "Metas", path: "/dashboard/goals" },
  { icon: "lucide:bar-chart-2", label: "Indicadores", path: "/dashboard/indicators" },
  { icon: "lucide:file-text", label: "Informes", path: "/dashboard/reports" },
  { icon: "lucide:zap", label: "Iniciativas", path: "/dashboard/initiatives" },
  { icon: "lucide:git-branch", label: "Escenarios", path: "/dashboard/scenarios" },
  { icon: "lucide:bell", label: "Alertas", path: "/dashboard/alerts" },
  { icon: "lucide:history", label: "Historial", path: "/dashboard/history" },
  { icon: "lucide:users", label: "Usuarios", path: "/dashboard/users" },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {!collapsed && (
  <aside className={`dashboard-bg min-h-screen border-r border-gray-300 dark:border-carbonDark flex-shrink-0 flex flex-col justify-between min-w-[9rem] sm:min-w-[12rem] w-auto p-2 sm:p-4`}>
          <nav>
            <ul className="space-y-1 sm:space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "font-semibold"
                        : "opacity-80 hover:opacity-100"
                    } dashboard-bg group`}
                  >
                    <Icon
                      icon={item.icon}
                      width="22"
                      height="22"
                      className={`transition-colors ${location.pathname === item.path ? "text-orange-400" : ""} group-hover:text-orange-400 sm:w-7 sm:h-7`}
                    />
                    <span
                      className={`hidden sm:inline text-base font-medium truncate ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text'
                          : ''
                      } group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 group-hover:text-transparent group-hover:bg-clip-text`}
                      style={{ maxWidth: 160 }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center pb-2">
            <button
              className="bg-orange-500 text-white border border-white rounded-full p-2 shadow"
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