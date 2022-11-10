import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: 40,
    marginBottom: 3,
    backgroundColor: "#d5b4b4",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#414345",

    "&:hover": {
      backgroundColor: "#dbcaca",
      cursor: "pointer",
    },
  },
});
