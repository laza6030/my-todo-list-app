import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const LeftMenu = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      classes={{ root: classes.root }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        classes={{ root: classes.title }}
      >
        <Typography>Your Workspace</Typography>
        <Divider classes={{ root: classes.divider }} />
      </Grid>

      <Button startIcon={<AddCircleRoundedIcon />}>New Workspace</Button>
    </Grid>
  );
};

export default LeftMenu;
