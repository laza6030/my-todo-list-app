import { useState } from "react";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useCreateWorkspace } from "../../../hooks";
import InputDialog from "../../common/InputDialog";
import WorkspaceItem from "./WorkspaceItem";
import { GetWorkspace_getWorkspace } from "../../../graphql/__generated__/GetWorkspace";

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

  const handleCancel = () => {
    setIsOpen(false);
    setWorkspaceName("");
  };

  const isError =
    workspace?.filter((workspace) => workspace?.name === workspaceName)
      .length !== 0;

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
        <DashboardIcon classes={{ root: classes.icon }} />
        <Typography>Your Workspace</Typography>
        <Divider classes={{ root: classes.divider }} />
      </Grid>
      {workspace?.map((item, index) => (
        <WorkspaceItem
          key={index}
          name={item?.name ?? ""}
          workspaceId={item?.id ?? ""}
        />
      ))}

      <Button
        startIcon={<AddCircleRoundedIcon />}
        onClick={() => setIsOpen(true)}
      >
        New Workspace
      </Button>

      {isOpen && (
        <InputDialog
          title="Create workspace"
          onCancel={handleCancel}
          onSubmit={handleCreateWorkspace}
          disableConfirmButton={!workspaceName}
          errorMessage="Workspace with the same name already exits"
          isError={isError}
          placeholder="enter workspace name"
          handleInputChange={(input: string) => setWorkspaceName(input)}
        />
      )}
    </Grid>
  );
};

export default WorkspaceMenu;
