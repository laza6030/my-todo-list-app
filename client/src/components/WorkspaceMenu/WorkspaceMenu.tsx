import { useState } from "react";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";

import { useCreateWorkspace } from "../../hooks";
import CustomDialog from "../common/CustomDialog";
import WorkspaceItem from "./WorkspaceItem";
import { GetWorkspace_getWorkspace } from "../../graphql/__generated__/GetWorkspace";

import { useStyles } from "./styles";

interface IProps {
  userId: string;
  workspace: (GetWorkspace_getWorkspace | null)[] | undefined;
}

const WorkspaceMenu = (props: IProps) => {
  const { workspace, userId } = props;
  const classes = useStyles();

  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { createWorkspace } = useCreateWorkspace(userId, () =>
    setIsOpen(false)
  );

  const handleCreateWorkspace = () => {
    createWorkspace({ name: workspaceName, userId });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      classes={{ root: classes.root }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        classes={{ root: classes.title }}
      >
        <Typography>Your Workspace</Typography>
        <Divider classes={{ root: classes.divider }} />
      </Grid>
      {workspace?.map((item, index) => (
        <WorkspaceItem
          key={index}
          name={item?.name ?? ""}
          id={item?.id ?? ""}
        />
      ))}

      <Button
        startIcon={<AddCircleRoundedIcon />}
        onClick={() => setIsOpen(true)}
      >
        New Workspace
      </Button>

      {isOpen && (
        <CustomDialog
          title="Create workspace"
          onCancel={() => setIsOpen(false)}
          onSubmit={handleCreateWorkspace}
          disableConfirmButton={!workspaceName}
          content={
            <Input
              placeholder="workspace name"
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setWorkspaceName(event.target.value)}
            />
          }
        />
      )}
    </Grid>
  );
};

export default WorkspaceMenu;
