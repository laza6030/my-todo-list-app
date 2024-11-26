import { createContext, useState, ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";

import { lightModeTheme, darkModeTheme } from "../theme";
import { IThemeContext, Mode } from "../types";

export const ThemeContext = createContext<IThemeContext>({
  mode: "light",
  changeMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "light"
  );

  const changeMode = () => {
    switch (mode) {
      case "dark":
        setMode("light");
        localStorage.setItem("mode", "light");
        break;

      case "light":
        setMode("dark");
        localStorage.setItem("mode", "dark");
        break;

      default:
        setMode("light");
        localStorage.setItem("mode", "light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        changeMode,
      }}
    >
      <MUIThemeProvider
        theme={mode === "light" ? lightModeTheme : darkModeTheme}
      >
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
