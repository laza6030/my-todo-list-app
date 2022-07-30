import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

interface IProps {
  name: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const Header = (props: IProps) => {
  const { name, onClickDelete, onClickEdit } = props;
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Typography classes={{ root: classes.name }}>{name}</Typography>

      <IconButton onClick={onClickEdit}>
        <EditIcon />
      </IconButton>

      <IconButton onClick={onClickDelete}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
};
export default Header;
