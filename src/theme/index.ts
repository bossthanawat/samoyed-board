
import { Colors, Breakpoints, MediaQueries, ZIndices } from "./types";

export interface SamoyedTheme {
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";