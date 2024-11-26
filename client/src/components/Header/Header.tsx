import { useContext } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";

import { UserContext } from "../../context/UserContext";

import SwitchMode from "./SwitchMode";

import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();
  const { username } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar classes={{ root: classes.appBar }}>
      <Typography classes={{ root: classes.userName }}>
        <AccountCircleIcon classes={{ root: classes.icon }} /> {username}
      </Typography>

      <SwitchMode />

      <IconButton onClick={handleLogout}>
        <LogoutIcon classes={{ root: classes.icon }} />
      </IconButton>
    </AppBar>
  );
};

export default Header;
