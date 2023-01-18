import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  errorMessage: {
    fontSize: 12,
    color: theme.palette.error.main,
  },
}));
