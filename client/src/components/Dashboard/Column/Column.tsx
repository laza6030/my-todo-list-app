import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import Header from "./Header";

import { useStyles } from "./styles";

interface IProps {
  name: string;
}

const Column = (props: IProps) => {
  const { name } = props;

  const classes = useStyles();

  return (
    <Grid container flexDirection="column" classes={{ root: classes.root }}>
      <Header name={name} />
      <Divider />
    </Grid>
  );
};

export default Column;
