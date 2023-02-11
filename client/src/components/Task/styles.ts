import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: 15,
    minHeight: 40,
    width: "100%",
    background: theme.palette.background.secondary,
    marginBottom: 5,
  },

  name: {
    width: "95%",
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  icon: {
    marginLeft: "auto",
  },
}));
