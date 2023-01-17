import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 40,
    marginBottom: 3,
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.background.disabled}`,

    "&:hover": {
      cursor: "pointer",
    },
  },

  link: {
    textDecoration: "none",
    paddingLeft: 10,
    color: theme.palette.text.primary,
  },

  iconButton: {
    marginLeft: "auto",
  },

  startIcon: {
    marginRight: 10,
  },
}));
