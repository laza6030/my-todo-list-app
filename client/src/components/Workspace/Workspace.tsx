import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { UserContext } from "../../context/UserContext";
import WorkspaceMenu from "./WorkspaceMenu";
import InputDialog from "../common/InputDialog";
import Column from "../Column";

import { useCreateColumn, useGetColumns, useGetWorkspace } from "../../hooks";

import { useStyles } from "./styles";

const Workspace = () => {
  const classes = useStyles();

  const { workspaceId } = useParams();
  const { id } = useContext(UserContext);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [columnName, setColumnName] = useState<string>("");

  const { workspace } = useGetWorkspace(id!);
  const { data } = useGetColumns(workspaceId!);
  const { createColumn } = useCreateColumn(workspaceId!);

  const handleOpenDialog = () => setOpenDialog((openDialog) => !openDialog);

  const handleCreateColumn = () => {
    if (workspaceId && columnName) {
      createColumn({ name: columnName, workspaceId });
      setColumnName("");
    }
  };

  const handleCancel = () => {
    setOpenDialog(false);
    setColumnName("");
  };

  const isError =
    data?.getColumns?.filter((column) => column?.name === columnName).length !==
    0;

  return (
    <Grid container>
      <WorkspaceMenu userId={id ?? ""} workspace={workspace} />

      <Grid
        item
        container
        flexWrap="nowrap"
        width="auto"
        classes={{ root: classes.columnWrapper }}
      >
        {data?.getColumns?.map((column, index) => (
          <Column
            key={column?.__typename! + index}
            name={column?.name!}
            id={column?.id!}
          />
        ))}

        <Button
          variant="contained"
          onClick={handleOpenDialog}
          classes={{ root: classes.button }}
          startIcon={<AddCircleIcon />}
        >
          Add New column
        </Button>
      </Grid>

      {openDialog && (
        <InputDialog
          onClose={() => setOpenDialog(false)}
          onSubmit={handleCreateColumn}
          onCancel={handleCancel}
          title="Create new column"
          placeholder="enter column name"
          disableConfirmButton={!columnName}
          isError={isError}
          errorMessage="column with the same name already exits"
          handleInputChange={(input: string) => setColumnName(input)}
        />
      )}
    </Grid>
  );
};

export default Workspace;
