import { ChangeEvent, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

import CustomDialog from "../common/CustomDialog";
import Column from "./Column";
import { useCreateColumn, useGetColumns } from "../../hooks";

import { useStyles } from "./styles";

const Dashboard = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const { data } = useGetColumns();
  const { mutate } = useCreateColumn();

  const handleOpenDialog = () => setOpenDialog((openDialog) => !openDialog);

  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setInput(event.target.value);

  const handleSubmit = () => {
    mutate({ variables: { name: input } });
    setInput("");
  };

  return (
    <Grid classes={{ root: classes.root }}>
      <Button variant="contained" onClick={handleOpenDialog}>
        Add New column
      </Button>

      <Grid item container>
        {data?.getColumns?.map((column, index) => (
          <Column
            key={column?.__typename! + index}
            name={column?.name!}
            id={column?.id!}
          />
        ))}
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
