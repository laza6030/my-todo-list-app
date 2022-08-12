import Grid from "@mui/material/Grid";
import { useStyles } from "./styles";

interface IProps {
  name: string;
}

const Task = (props: IProps) => {
  const classes = useStyles();
  const { name } = props;
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      classes={{ root: classes.root }}
    >
      {name}
    </Grid>
  );
};

export default Task;
