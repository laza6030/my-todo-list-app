import Button, { ButtonProps } from "@mui/material/Button";

interface IProps extends ButtonProps {}

const CustomButton = (props: IProps) => {
  return <Button {...props}></Button>;
};

export default CustomButton;
