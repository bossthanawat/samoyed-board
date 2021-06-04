import React, { useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { dark, light } from "theme";
import { Theme, types, ThemeType } from "./type";
import { DefaultTheme } from "styled-components";

const CACHE_KEY = "THEME";

const ThemeContext = React.createContext<Theme>(undefined);

const ThemeContextProvider = ({ children }) => {
  const [typeTheme, setTypeTheme] = useState(()=> {
    const themeUserSetting = localStorage.getItem(CACHE_KEY);
    return themeUserSetting || types.DARK;
  });

  const changeTheme = (type:ThemeType) => {
    localStorage.setItem(CACHE_KEY,type)
    setTypeTheme(type);
  };
  const handleTheme = (type:string): DefaultTheme => {
    if (type === types.DARK) return dark;
    if (type === types.LIGHT) return light;
  };
  return (
    <ThemeContext.Provider value={{ typeTheme, changeTheme }}>
      <SCThemeProvider theme={handleTheme(typeTheme)}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
