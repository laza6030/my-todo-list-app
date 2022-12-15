import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    height: "max-content",
    width: "max-content",
    marginTop: 10,
    backgroundColor: theme.palette.background.default,
  },

  columnWrapper: {
    marginTop: 10,
  },
}));
