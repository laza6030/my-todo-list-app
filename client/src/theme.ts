import { createTheme } from "@mui/material/styles";

export const lightModeTheme = createTheme({
  palette: {
    primary: {
      main: "#28251d",
    },

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
    primary: {
      main: "#bfbfbd",
    },

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
