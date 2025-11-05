import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  // Sidebar items for search
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

  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  return (
    <div className="dashboard-bg flex h-screen">
      {!sidebarCollapsed && <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />}
      {sidebarCollapsed && (
        <button
          className="fixed bottom-4 left-4 z-50 bg-orange-500 text-white border border-white rounded-full p-2 shadow-lg"
          onClick={() => setSidebarCollapsed(false)}
          aria-label="Mostrar barra lateral"
        >
          <span className="sr-only">Mostrar barra lateral</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      <div className={`flex-1 flex flex-col overflow-hidden dashboard-bg transition-all duration-300`}>
        <Navbar isBordered className="px-2 sm:px-6">
          <NavbarBrand>
            <Icon icon="logos:bhp" width="48" height="24" className="sm:w-80 sm:h-40" />
            <h2 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 bg-clip-text text-transparent">CarbonNet</h2>
          </NavbarBrand>
          <NavbarContent className="hidden xs:flex gap-2 sm:gap-4 dashboard-bg" justify="center">
            <NavbarItem>
              <div className="relative">
                <Input
                  classNames={{
                    base: "max-w-full xs:max-w-[16rem] sm:max-w-[32rem] h-9 sm:h-10 dashboard-bg",
                    mainWrapper: "h-full dashboard-bg",
                    input: "text-xs sm:text-sm dashboard-bg",
                    inputWrapper: "h-full font-normal dashboard-bg",
                  }}
                  placeholder="Buscar..."
                  size="sm"
                  startContent={<Icon icon="lucide:search" width="16" height="16" />}
                  type="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter" && search.trim()) {
                      const match = sidebarItems.find(item =>
                        item.label.toLowerCase().includes(search.trim().toLowerCase())
                      );
                      if (match) navigate(match.path);
                    }
                  }}
                />
                {search.trim() && (
                  <ul className="absolute z-10 left-0 mt-2 min-w-max w-auto bg-white dark:bg-carbonDark border border-gray-200 dark:border-carbonDark rounded shadow-lg max-h-60 overflow-auto">
                    {sidebarItems
                      .filter(item => item.label.toLowerCase().includes(search.trim().toLowerCase()))
                      .map(item => (
                        <li
                          key={item.path}
                          className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-carbonDark/70"
                          onMouseDown={() => {
                            navigate(item.path);
                            setSearch("");
                          }}
                        >
                          <Icon icon={item.icon} width="20" height="20" />
                          <span>{item.label}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent as="div" justify="end" className="dashboard-bg gap-2">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform dashboard-bg"
                  color="primary"
                  name={user?.name}
                  size="sm"
                  src="https://img.heroui.chat/image/avatar?w=48&h=48&u=1"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Acciones de perfil" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2 dashboard-bg">
                  <p className="font-semibold">Conectado como</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">Configuración de la cuenta</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => { logout(); navigate("/login"); }}>
                  Cerrar sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;