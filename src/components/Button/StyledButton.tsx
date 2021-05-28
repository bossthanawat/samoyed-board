import styled, { DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";
import { variant } from "styled-system";
import { scales } from "./types"

interface ThemedButtonProps extends ButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled{
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled{
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s;
  &:hover:not(:disabled) {
    opacity: 0.65;
  }
  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: {
      [scales.MD]: {
        height: "48px",
        padding: "0 24px",
      },
      [scales.SM]: {
        height: "32px",
        padding: "0 16px",
      },
      [scales.XS]: {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
      },
    },
  })}
`;

export default StyledButton;
