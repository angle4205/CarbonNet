import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AlertBannerProps {
  type: "success" | "warning" | "error" | "info";
  message: string;
  onClose?: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, message, onClose }) => {
  const [fading, setFading] = React.useState(false);
  const iconMap = {
    success: "lucide:check-circle",
    warning: "lucide:alert-triangle",
    error: "lucide:x-circle",
    info: "lucide:info",
  };

  // Cambia info a naranja
  const colorMap = {
    success: "bg-orange-100 text-orange-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-orange-100 text-orange-800",
  };

  // Fade out al cerrar
  const handleClose = () => {
    setFading(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 350);
  };

  return (
    <Card className={`${colorMap[type]} mb-4 transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <CardBody className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Icon icon={iconMap[type]} className="mr-2" width="24" height="24" />
          <span>{message}</span>
        </div>
        {onClose && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Cerrar alerta"
            onClick={handleClose}
          >
            <Icon icon="lucide:x" />
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default AlertBanner;