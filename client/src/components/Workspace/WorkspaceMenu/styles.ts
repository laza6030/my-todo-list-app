import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    width: 190,
    marginTop: 10,
    marginRight: 10,
  },

  title: {
    height: 40,
  },

  divider: {
    width: "100%",
  },

  icon: {
    paddingRight: 5,
  },
}));
