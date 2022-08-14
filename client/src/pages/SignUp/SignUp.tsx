import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const SignUp = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      classes={{ root: classes.root }}
    >
      <Typography variant="h5" classes={{ root: classes.title }}>
        Welcome to my-todo-list app
      </Typography>

      <Grid item classes={{ root: classes.formItem }}>
        <Typography>Username:</Typography>
        <TextField placeholder="Just pick a cool username ;)" />
      </Grid>

      <Grid item classes={{ root: classes.formItem }}>
        <Typography>Password:</Typography>
        <TextField placeholder="Choose anything you want" />
      </Grid>

      <Button>Register</Button>
    </Grid>
  );
};

export default SignUp;
