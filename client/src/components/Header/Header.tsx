import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";

import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar classes={{ root: classes.appBar }}>
      <IconButton onClick={handleLogout} classes={{ root: classes.button }}>
        <LogoutIcon />
      </IconButton>
    </AppBar>
  );
};

export default Header;
