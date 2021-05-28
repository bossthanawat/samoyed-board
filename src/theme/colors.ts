import { Colors } from "./types";

export const baseColors = {
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
};


export const lightColors: Colors = {
  ...baseColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
};

export const darkColors: Colors = {
  ...baseColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  primaryDark: "#0098A1",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
};