import { Link } from "react-router-dom";

import { useStyles } from "./styles";

interface IProps {
  id: string;
  name: string;
}

const WorkspaceItem = (props: IProps) => {
  const { id, name } = props;

  const classes = useStyles();

  return (
    <Link to={`/dashboard/${id}`} className={classes.root}>
      {name}
    </Link>
  );
};

export default WorkspaceItem;
