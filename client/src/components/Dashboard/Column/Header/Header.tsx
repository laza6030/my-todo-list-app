import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

interface IProps {
  name: string;
}

const Header = (props: IProps) => {
  const { name } = props;
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Typography classes={{ root: classes.name }}>{name}</Typography>

      <IconButton>
        <EditIcon />
      </IconButton>

      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
};
export default Header;
