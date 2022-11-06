import { Link } from "react-router-dom";

import { useStyles } from "./styles";

interface IProps {
  name: string;
  id: string;
}

const WorkspaceItem = (props: IProps) => {
  const { name, id } = props;

  const classes = useStyles();

  return (
    <Link to={id} className={classes.root}>
      {name}
    </Link>
  );
};

export default WorkspaceItem;
