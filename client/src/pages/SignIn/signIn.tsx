import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { isUserConnected } from "../../helpers";
import { useSignIn } from "../../hooks";

import { useStyles } from "./styles";

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  const { signIn } = useSignIn();

  useEffect(() => {
    if (isUserConnected()) {
      navigate("/dashboard");
    }
  }, []);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setIdentifier({ ...identifier, [event.target.name]: event.target.value });

  const handleSignIn = () => signIn({ input: { ...identifier } });

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
          placeholder="Enter your username :D"
        />
      </Grid>

      <Grid item classes={{ root: classes.formItem }}>
        <Typography>Password:</Typography>
        <TextField
          name="password"
          onChange={onChange}
          placeholder="Your password goes here..."
          type="password"
        />
      </Grid>

      <Button
        disabled={!identifier.username || !identifier.password}
        onClick={handleSignIn}
      >
        Log in
      </Button>

      <Typography>
        Want to register? <Link to="/sign-up">Sign up</Link>
      </Typography>
    </Grid>
  );
};

export default SignIn;
