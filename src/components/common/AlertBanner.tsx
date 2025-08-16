import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AlertBannerProps {
  type: "success" | "warning" | "error" | "info";
  message: string;
  onClose?: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, message, onClose }) => {
  const iconMap = {
    success: "lucide:check-circle",
    warning: "lucide:alert-triangle",
    error: "lucide:x-circle",
    info: "lucide:info",
  };

  const colorMap = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <Card className={`${colorMap[type]} mb-4`}>
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
            onClick={onClose}
          >
            <Icon icon="lucide:x" />
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default AlertBanner;