import { useState } from "react";
import { useDrag } from "react-dnd";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import CustomDialog from "../common/CustomDialog";
import { GetTasksByColumn_getTasksByColumn } from "../../graphql/__generated__/GetTasksByColumn";
import { useDeleteTask } from "../../hooks";
import { ItemTypes } from "../../constants";

import { useStyles } from "./styles";

interface IProps extends Omit<GetTasksByColumn_getTasksByColumn, "__typename"> {
  refetch: () => void;
}

const Task = (props: IProps) => {
  const classes = useStyles();
  const { id, name, columnId, refetch } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const [, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id, columnSourceId: columnId },
    end: () => refetch(),
  }));

  const { deleteTask } = useDeleteTask(columnId);

  const handleDeleteTask = () => deleteTask({ id });

  const handleOpenDialog = () => setIsOpen(true);

  const handleCloseDialog = () => setIsOpen(false);

  return (
    <Grid
      ref={drag}
      container
      alignItems="center"
      justifyContent="flex-start"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      classes={{ root: classes.root }}
    >
      {name}
      {showDelete && (
        <IconButton onClick={handleOpenDialog} classes={{ root: classes.icon }}>
          <DeleteIcon />
        </IconButton>
      )}

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
