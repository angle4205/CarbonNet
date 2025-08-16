import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader, Input, Button, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      addToast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido a BHP CarbonNet",
        color: "success",
      });
  navigate("/dashboard");
    } catch (error) {
      addToast({
        title: "Error de inicio de sesión",
        description: "Credenciales inválidas. Por favor, inténtelo de nuevo.",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-2 xs:px-0">
      <Card className="w-full max-w-xs xs:max-w-sm sm:max-w-md">
        <CardHeader className="flex flex-col items-center pb-4 pt-4 px-2 xs:pb-6 xs:pt-6 xs:px-4">
          <Icon icon="logos:bhp" width="60" height="30" className="xs:w-24 xs:h-12" />
          <h1 className="text-lg xs:text-xl sm:text-2xl font-bold mt-2 xs:mt-4 text-gray-800">CarbonNet</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="space-y-3 xs:space-y-4">
            <Input
              label="Correo electrónico"
              placeholder="correo@ejemplo.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Contraseña"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={isLoading}
            >
              Iniciar sesión
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;