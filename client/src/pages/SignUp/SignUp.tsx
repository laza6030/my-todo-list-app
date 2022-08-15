import { useState } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const SignUp = () => {
  const classes = useStyles();

  const [identifier, setIdentifier] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setIdentifier({ ...identifier, [event.target.name]: event.target.value });

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
        <TextField
          name="username"
          onChange={onChange}
          placeholder="Just pick a cool username ;)"
        />
      </Grid>

      <Grid item classes={{ root: classes.formItem }}>
        <Typography>Password:</Typography>
        <TextField
          name="password"
          onChange={onChange}
          placeholder="Choose anything you want"
          type="password"
        />
      </Grid>

      <Button>Register</Button>
    </Grid>
  );
};

export default SignUp;
