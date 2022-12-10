import Button, { ButtonProps } from "@mui/material/Button";

import { useStyles } from "./styles";

interface IProps extends ButtonProps {}

const CustomButton = (props: IProps) => {
  const classes = useStyles();

  return <Button {...props} classes={{ root: classes.root }}></Button>;
};

export default CustomButton;
