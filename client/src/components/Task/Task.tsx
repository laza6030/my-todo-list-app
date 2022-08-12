import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import { GetTasksByColumn_getTasksByColumn } from "../../graphql/__generated__/GetTasksByColumn";
import { useDeleteTask } from "../../hooks";

import { useStyles } from "./styles";

interface IProps
  extends Omit<GetTasksByColumn_getTasksByColumn, "__typename"> {}

const Task = (props: IProps) => {
  const classes = useStyles();
  const { id, name, columnId } = props;

  const { mutate } = useDeleteTask(columnId);

  const handleDeleteTask = () => mutate({ variables: { id } });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      classes={{ root: classes.root }}
    >
      {name}
      <IconButton onClick={handleDeleteTask} classes={{ root: classes.icon }}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
};

export default Task;
