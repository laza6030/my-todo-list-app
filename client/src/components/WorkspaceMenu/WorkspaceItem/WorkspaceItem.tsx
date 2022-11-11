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

import CustomDialog from "../../common/CustomDialog";
import { useDeleteWorkspace } from "../../../hooks";

import { useStyles } from "./styles";

interface IProps {
  id: string;
  name: string;
}

const WorkspaceItem = (props: IProps) => {
  const { id, name } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { deleteWorkspace } = useDeleteWorkspace();

  const handleClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
  };

  const handleSwitchWorspace = () => {
    navigate(`/dashboard/${id}`);
    setAnchorEl(null);
  };

  return (
    <Grid
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      classes={{ root: classes.root }}
    >
      <Link to={`/dashboard/${id}`} className={classes.link}>
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
          <DriveFileRenameOutlineIcon /> Rename
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(true)}>
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem onClick={handleSwitchWorspace}>
          <SwapHorizIcon />
          Switch
        </MenuItem>
      </Menu>

      {isOpen && (
        <CustomDialog
          onCancel={() => setIsOpen(false)}
          onSubmit={() => deleteWorkspace({ workspaceId: id })}
        />
      )}
    </Grid>
  );
};

export default WorkspaceItem;
