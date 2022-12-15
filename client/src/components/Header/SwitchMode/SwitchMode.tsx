import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";

import { ThemeContext } from "../../../context/ThemeContext";

const SwitchMode = () => {
  const { mode, changeMode } = useContext(ThemeContext);

  return (
    <>
      {mode === "dark" ? (
        <IconButton onClick={changeMode}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={changeMode}>
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};

export default SwitchMode;
