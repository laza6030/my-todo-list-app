import { ChangeEvent, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

import CustomDialog from "../common/CustomDialog";
import Header from "../Header";
import Column from "../Column";
import WorkspaceMenu from "../WorkspaceMenu";
import { useCreateColumn, useGetColumns } from "../../hooks";

import { useStyles } from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const { data } = useGetColumns();
  const { createColumn } = useCreateColumn();

  const handleOpenDialog = () => setOpenDialog((openDialog) => !openDialog);

  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setInput(event.target.value);

  const handleSubmit = () => {
    createColumn({ name: input });
    setInput("");
  };

  return (
    <Grid container classes={{ root: classes.root }}>
      <Header />
      <WorkspaceMenu />
      <Grid item container flexWrap="nowrap" width="auto">
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
        <CustomDialog
          onClose={() => setOpenDialog(false)}
          onSubmit={handleSubmit}
          title="Enter column name"
          content={
            <Input
              value={input}
              placeholder="column name"
              name="input"
              onChange={handleInputChange}
            />
          }
        />
      )}
    </Grid>
  );
};

export default Dashboard;
