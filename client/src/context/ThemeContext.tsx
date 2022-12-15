import { createContext, useState, ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";

import { theme as defaultTheme, darkModeTheme } from "../theme";

import { IThemeContext, Mode } from "../types";

export const ThemeContext = createContext<IThemeContext>({
  mode: "light",
  changeMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("light");

  const changeMode = () => {
    switch (mode) {
      case "dark":
        setMode("light");
        break;

      case "light":
        setMode("dark");
        break;

      default:
        setMode("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        changeMode,
      }}
    >
      <MUIThemeProvider theme={mode === "light" ? defaultTheme : darkModeTheme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
