export const scales = {
  MD: "md",
  SM: "sm",
  XS: "xs",
} as const;
export type Scale = typeof scales[keyof typeof scales];

export interface ButtonProps {
  backgroundColor?: string;
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  scale?:Scale;
  onClick?: () => void;
}


