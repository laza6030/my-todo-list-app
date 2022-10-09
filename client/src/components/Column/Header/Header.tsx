import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import CustomDialog from "../../common/CustomDialog";

import { useStyles } from "./styles";

interface IProps {
  name: string;
  onClickValidate: (name: string) => void;
  onClickDelete: () => void;
}

const Header = (props: IProps) => {
  const { name, onClickDelete, onClickValidate } = props;

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(name);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const classes = useStyles();

  const handleClickValidate = () => {
    if (!!value) onClickValidate(value);
    setIsEditMode(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOpenDialog = () => setIsOpen(true);

  const handleCloseDialog = () => setIsOpen(false);

  return (
    <Grid
      container
      alignItems="center"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      classes={{ root: classes.root }}
    >
      {isEditMode ? (
        <TextField
          value={value}
          onChange={onChange}
          classes={{ root: classes.input }}
          inputProps={{
            className: classes.inputRoot,
          }}
        />
      ) : (
        <Typography classes={{ root: classes.name }}>{name}</Typography>
      )}

      {isEditMode ? (
        <IconButton onClick={handleClickValidate}>
          <CheckIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditMode(true)}>
          <EditIcon />
        </IconButton>
      )}

      {showDelete && (
        <IconButton onClick={handleOpenDialog}>
          <DeleteIcon />
        </IconButton>
      )}

      {isOpen && (
        <CustomDialog
          onClose={handleCloseDialog}
          onCancel={handleCloseDialog}
          onSubmit={onClickDelete}
          content="Do you really want to delete this column?"
          confirmLabel="Confirm"
        />
      )}
    </Grid>
  );
};
export default Header;
