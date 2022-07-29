import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface IProps {
  title?: string;
  content?: React.ReactNode;
  onCancel?: () => void;
  onSubmit?: () => void;
  onClose?: () => void;
}

const CustomDialog = (props: IProps) => {
  const { title, content, onCancel, onSubmit, onClose } = props;

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.();
    onClose?.();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
