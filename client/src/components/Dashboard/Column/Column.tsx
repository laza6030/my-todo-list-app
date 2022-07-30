import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import Header from "./Header";

import { GetColumns_getColumns } from "../../../graphql/__generated__/GetColumns";
import { useDeleteColumn } from "../../../hooks";

import { useStyles } from "./styles";

interface IProps extends Omit<GetColumns_getColumns, "__typename"> {}

const Column = (props: IProps) => {
  const { id, name } = props;
  const classes = useStyles();
  const { mutate } = useDeleteColumn();

  const onClickEdit = () => {};

  const onClickDelete = () => {
    mutate({ variables: { id } });
  };

  return (
    <Grid container flexDirection="column" classes={{ root: classes.root }}>
      <Header
        name={name}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
      <Divider />
    </Grid>
  );
};

export default Column;
