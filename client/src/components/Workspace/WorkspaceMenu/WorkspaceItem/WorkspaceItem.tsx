import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVert from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";

import CustomDialog from "../../../common/CustomDialog";
import { useDeleteWorkspace } from "../../../../hooks";

import { useStyles } from "./styles";

interface IProps {
  workspaceId: string;
  name: string;
}

const WorkspaceItem = (props: IProps) => {
  const { workspaceId, name } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { deleteWorkspace, loading: loadingDeleteWorkspace } =
    useDeleteWorkspace(() => setIsOpen(false));

  const handleClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  const handleSwitchWorspace = () => {
    navigate(`/dashboard/${workspaceId}`);
    setAnchorEl(null);
  };

  const handleOpenDeleteDialog = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  return (
    <Grid
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      classes={{ root: classes.root }}
    >
      <Link to={`/dashboard/${workspaceId}`} className={classes.link}>
        {name}
      </Link>

      {showMenu && (
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            setAnchorEl(event.currentTarget)
          }
          classes={{ root: classes.iconButton }}
        >
          <MoreVert />
        </IconButton>
      )}

      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>
          <DriveFileRenameOutlineIcon classes={{ root: classes.startIcon }} />
          Rename
        </MenuItem>

        <MenuItem onClick={handleOpenDeleteDialog}>
          <DeleteIcon classes={{ root: classes.startIcon }} />
          Delete
        </MenuItem>

        <MenuItem onClick={handleSwitchWorspace}>
          <SwapHorizIcon classes={{ root: classes.startIcon }} />
          Switch
        </MenuItem>
      </Menu>

      {isOpen && (
        <CustomDialog
          title="Delete workspace"
          disableConfirmButton={loadingDeleteWorkspace}
          content={<>Do you really want to delete this workspace: "{name}"?</>}
          onCancel={() => setIsOpen(false)}
          onSubmit={() => {
            console.log({ workspaceId, name });
            deleteWorkspace({ workspaceId });
          }}
        />
      )}
    </Grid>
  );
};

export default WorkspaceItem;
