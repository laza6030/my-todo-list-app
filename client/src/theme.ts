import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#82a6ed",
      paper: "#a9c2cc",
      disabled: "#9bacc2",
    },

    text: {
      primary: "#000",
      secondary: "#1874a5",
    },

    error: {
      main: "#f72e20",
    },
  },
});

export const darkModeTheme = createTheme({
  palette: {
    background: {
      default: "#28251d",
      paper: "#0000FF",
    },

    text: {
      primary: "#00FF00",
      secondary: "#FF0000",
    },
  },
});
