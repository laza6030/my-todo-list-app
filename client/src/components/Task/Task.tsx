import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import CustomDialog from "../common/CustomDialog";
import { GetTasksByColumn_getTasksByColumn } from "../../graphql/__generated__/GetTasksByColumn";
import { useDeleteTask } from "../../hooks";

import { useStyles } from "./styles";

interface IProps
  extends Omit<GetTasksByColumn_getTasksByColumn, "__typename"> {}

const Task = (props: IProps) => {
  const classes = useStyles();
  const { id, name, columnId } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { mutate } = useDeleteTask(columnId);

  const handleDeleteTask = () => mutate({ variables: { id } });

  const handleOpenDialog = () => setIsOpen(true);

  const handleCloseDialog = () => setIsOpen(false);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      classes={{ root: classes.root }}
    >
      {name}
      <IconButton onClick={handleOpenDialog} classes={{ root: classes.icon }}>
        <DeleteIcon />
      </IconButton>

      {isOpen && (
        <CustomDialog
          onClose={handleCloseDialog}
          onCancel={handleCloseDialog}
          onSubmit={handleDeleteTask}
          content="Do you really want to delete this task?"
          confirmLabel="Confirm"
        />
      )}
    </Grid>
  );
};

export default Task;
