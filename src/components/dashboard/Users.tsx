// Formatea números con punto como miles y coma como decimal
function formatNumber(num) {
  const parts = Number(num).toFixed(1).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(',');
}
import React from "react";
import { Card, CardHeader, CardBody, Badge, Button } from "@heroui/react";

const users = [
  { name: "Ana Gómez", email: "ana@demo.com", role: "admin" },
  { name: "Luis Pérez", email: "luis@demo.com", role: "editor" },
  { name: "Marta Ruiz", email: "marta@demo.com", role: "viewer" }
];

const roleColor = {
  admin: "danger",
  editor: "primary",
  viewer: "default"
};

function Users() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Gestión de Usuarios y Roles</h1>
      <div className="w-full bg-white dark:bg-carbonDark rounded-xl shadow p-4 mb-6">
        <div className="font-bold text-lg mb-2">Usuarios</div>
        <Button color="primary" size="sm">Agregar usuario</Button>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Nombre</th>
              <th className="py-2">Email</th>
              <th className="py-2">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="hover:bg-carbonGray-light transition">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">
                  <Badge color={roleColor[user.role]}>{user.role}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
