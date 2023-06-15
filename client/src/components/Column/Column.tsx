import { useState } from "react";
import { useDrop } from "react-dnd";
import { useParams } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import InputDialog from "../common/InputDialog";
import Task from "../Task";
import Header from "./Header";

import { GetColumns_getColumns } from "../../graphql/__generated__/GetColumns";
import {
  useDeleteColumn,
  useRenameColumn,
  useCreateTask,
  useGetTasksByColumn,
  useMoveTask,
} from "../../hooks";
import { ItemTypes } from "../../constants";

import { useStyles } from "./styles";

interface IProps extends Omit<GetColumns_getColumns, "__typename"> {}

const Column = (props: IProps) => {
  const { id, name } = props;
  const { workspaceId } = useParams();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const { deleteColumn } = useDeleteColumn(workspaceId!);
  const { mutate: renameColumn } = useRenameColumn();
  const { createTask, loading } = useCreateTask(id);
  const { data, refetch } = useGetTasksByColumn(id);
  const { moveTask } = useMoveTask(id);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item: { id: string; columnSourceId: string }) =>
      moveTask({ taskId: item.id, columnId: id }),
  }));

  const onClickValidate = (name: string) =>
    renameColumn({ variables: { id, name } });

  const onClickDelete = () => {
    deleteColumn({ id });
  };

  const handleOpenDialog = () => setIsOpen(true);

  const handleCloseDialog = () => setIsOpen(false);

  const handleSubmit = () => {
    createTask({
      columnId: id,
      name: taskName,
      rank: data?.getTasksByColumn?.length ?? 0,
    });
    setTaskName("");
  };

  const handleRefetch = () => {
    refetch();
  };

  const isError =
    data?.getTasksByColumn?.filter(({ name }) => name === taskName).length !==
    0;

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      classes={{ root: classes.root }}
      ref={drop}
    >
      <Header
        name={name}
        onClickDelete={onClickDelete}
        onClickValidate={onClickValidate}
      />
      <Divider classes={{ root: classes.divider }} />

      {data?.getTasksByColumn?.map((task) => (
        <Task
          key={task?.id}
          id={task?.id ?? ""}
          name={task?.name ?? ""}
          columnId={task?.columnId ?? ""}
          refetch={handleRefetch}
        />
      ))}

      <Grid item>
        <IconButton
          disabled={loading}
          onClick={handleOpenDialog}
          classes={{ root: classes.addButton }}
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>

      {isOpen && (
        <InputDialog
          title="New task"
          onCancel={handleCloseDialog}
          onClose={handleCloseDialog}
          onSubmit={handleSubmit}
          errorMessage="task with the same name already exists"
          handleInputChange={(input: string) => setTaskName(input)}
          isError={isError}
          disableConfirmButton={!taskName}
          placeholder="enter task name"
        />
      )}
    </Grid>
  );
};

export default Column;
