import React from "react";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </BrowserRouter>
  );
};

export default Providers;
