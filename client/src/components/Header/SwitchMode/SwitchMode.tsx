import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";

import { ThemeContext } from "../../../context/ThemeContext";

import { useStyles } from "./styles";

const SwitchMode = () => {
  const classes = useStyles();
  const { mode, changeMode } = useContext(ThemeContext);

  return (
    <>
      {mode === "dark" ? (
        <IconButton onClick={changeMode}>
          <LightModeIcon classes={{ root: classes.icon }} />
        </IconButton>
      ) : (
        <IconButton onClick={changeMode}>
          <DarkModeIcon classes={{ root: classes.icon }} />
        </IconButton>
      )}
    </>
  );
};

export default SwitchMode;
