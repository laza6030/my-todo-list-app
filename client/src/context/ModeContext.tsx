import { createContext, useState, ReactNode } from "react";

import { IModeContext, Mode } from "../types";

export const ModeContext = createContext<IModeContext>({
  mode: "light",
  changeMode: () => {},
});

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) ?? "light"
  );

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else setMode("dark");
    localStorage.setItem("mode", mode);
  };

  return (
    <ModeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
