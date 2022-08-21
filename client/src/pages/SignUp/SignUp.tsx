import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { isUserConnected } from "../../helpers";
import { useSignUp } from "../../hooks";
import { useStyles } from "./styles";

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const { signUp } = useSignUp();

  if (isUserConnected()) {
    navigate("/dashboard");
  }

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setIdentifier({ ...identifier, [event.target.name]: event.target.value });

  const onRegister = () => {
    signUp({
      input: { ...identifier },
    });
  };

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
      <Button
        disabled={!identifier.username || !identifier.password}
        onClick={onRegister}
      >
        Register
      </Button>

      <Typography>
        You already have an account?&nbsp;
        <Link to="/sign-in">Go to sign in page</Link>
      </Typography>
    </Grid>
  );
};

export default SignUp;
