import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";

import { ModeContext } from "../../../context/ModeContext";

const SwitchMode = () => {
  const { mode, changeMode } = useContext(ModeContext);

  return (
    <>
      {mode === "dark" ? (
        <IconButton onClick={() => changeMode("dark")}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => changeMode("light")}>
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};

export default SwitchMode;
