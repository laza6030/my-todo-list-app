import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import { useStyles } from "./styles";

export interface IProps {
  title?: string;
  content?: React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  disableConfirmButton?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  onClose?: () => void;
}

const CustomDialog = (props: IProps) => {
  const {
    title,
    content,
    confirmLabel,
    cancelLabel,
    disableConfirmButton = false,
    onCancel,
    onSubmit,
    onClose,
  } = props;

  const classes = useStyles();

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.();
    onClose?.();
  };

  return (
    <Dialog open onClose={onClose} classes={{ paper: classes.paper }}>
      {title && <DialogTitle>{title}</DialogTitle>}

      {content && <DialogContent>{content}</DialogContent>}

      <DialogActions>
        <Button onClick={handleCancel}>
          {cancelLabel ? cancelLabel : <>Cancel</>}
        </Button>
        <Button onClick={handleSubmit} disabled={disableConfirmButton}>
          {confirmLabel ? confirmLabel : <>Submit</>}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
