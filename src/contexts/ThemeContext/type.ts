
export const types = {
  DARK: "dark",
  LIGHT: "light",
} as const;
export type ThemeType = typeof types[keyof typeof types];

export interface Theme {
  typeTheme: string;
  changeTheme: (type:ThemeType) => void;
}
