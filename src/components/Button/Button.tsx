import { ButtonProps, scales } from "./types"
import StyledButton from "./StyledButton";

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  label,
  isLoading,
  disabled,
  children,
  ...props
}) => {
  const isDisabled = isLoading || disabled;
  return (
    <StyledButton
      isLoading={isLoading}
      disabled={isDisabled}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  scale: scales.MD,
};
export default Button;
