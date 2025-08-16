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

const Users: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold">Gestión de Usuarios y Roles</h1>
    <Card className="max-w-3xl mx-auto mb-6 dashboard-bg">
      <CardHeader className="font-bold text-lg flex justify-between items-center">
        <span>Usuarios</span>
        <Button color="primary" size="sm">Agregar usuario</Button>
      </CardHeader>
      <CardBody>
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
      </CardBody>
    </Card>
  </div>
);

export default Users;
