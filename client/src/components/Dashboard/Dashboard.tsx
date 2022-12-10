import Grid from "@mui/material/Grid";

import Header from "../Header";
import Workspace from "../Workspace";

import { useStyles } from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container classes={{ root: classes.root }}>
      <Header />
      <Workspace />
    </Grid>
  );
};

export default Dashboard;
