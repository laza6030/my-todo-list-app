import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Grid>
      <AppBar>
        <IconButton onClick={handleLogout} classes={{ root: classes.button }}>
          <LogoutIcon />
        </IconButton>
      </AppBar>
    </Grid>
  );
};

export default Home;
