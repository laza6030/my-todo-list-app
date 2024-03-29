import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "none",
  },

  userName: {
    marginLeft: "auto",
    display: "flex",
  },

  userIcon: {
    marginRight: 5,
  },
}));
