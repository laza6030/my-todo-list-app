import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    paddingLeft: 10,
  },

  name: {
    fontFamily: "Barlow",
    marginRight: "auto",
    maxWidth: 100,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  input: {
    width: "70%",
  },

  inputRoot: {
    height: 0,
  },
});
