import CustomDialog, { IProps as CustomDialogProps } from "../CustomDialog";

import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

interface IProps extends CustomDialogProps {
  placeholder: string;
  isError: boolean;
  errorMessage: string;
  handleInputChange: (input: string) => void;
}

const InputDialog = (props: IProps) => {
  const {
    title,
    onCancel,
    onClose,
    onSubmit,
    placeholder,
    isError,
    errorMessage,
    disableConfirmButton,
    handleInputChange,
  } = props;
  const classes = useStyles();

  return (
    <CustomDialog
      title={title}
      onCancel={onCancel}
      onClose={onClose}
      onSubmit={onSubmit}
      disableConfirmButton={disableConfirmButton || isError}
      content={
        <Grid container direction="column">
          <Input
            placeholder={placeholder}
            error={isError}
            onChange={(
              event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => handleInputChange(event.target.value)}
          />

          {isError && (
            <Typography classes={{ root: classes.errorMessage }}>
              {errorMessage}
            </Typography>
          )}
        </Grid>
      }
    />
  );
};

export default InputDialog;
