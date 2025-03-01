import { Input } from "@heroui/input";

interface GlobalInputProps {
  label?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "flat" | "bordered" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left";
  isClearable?: boolean;
  defaultValue?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  description?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const GlobalInput = ({
  label = "Label",
  type = "text",
  name = "",
  placeholder = "Escriba aquí",
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  size = "lg",
  color = "primary",
  variant = "bordered",
  radius = "lg",
  labelPlacement = "inside",
  isClearable = true,
  defaultValue = "",
  startContent = "",
  endContent = "",
  description = "",
  isInvalid = false,
  errorMessage = "Error",
  onChange,
  value,
}: GlobalInputProps) => {
  return (
    <Input
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      size={size}
      color={color}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      isClearable={isClearable}
      defaultValue={defaultValue}
      startContent={startContent}
      endContent={endContent}
      description={description}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    />
  );
};

export default GlobalInput;
