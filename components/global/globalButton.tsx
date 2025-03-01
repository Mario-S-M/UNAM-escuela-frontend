import { Button } from "@heroui/button";

interface GlobalButtonProps {
  onPress?: () => void;
  text?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "bordered" | "light" | "flat" | "ghost";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isIconOnly?: boolean;
}

const GlobalButton = ({
  onPress,
  text = "Hola",
  isDisabled = false,
  isLoading = false,
  size = "lg",
  color = "primary",
  variant = "solid",
  startContent = "",
  endContent = "",
  isIconOnly = false,
}: GlobalButtonProps) => {
  return (
    <Button
      isDisabled={isDisabled}
      size={size}
      radius="lg"
      color={color}
      variant={variant}
      isLoading={isLoading}
      endContent={endContent}
      startContent={startContent}
      isIconOnly={isIconOnly}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default GlobalButton;
