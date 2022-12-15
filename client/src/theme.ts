import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f2ebd8",
      paper: "#a9c2cc",
    },

    text: {
      primary: "#000",
      secondary: "#1874a5",
    },
  },
});

export const darkModeTheme = createTheme({
  palette: {
    background: {
      default: "#FF0000",
      paper: "#0000FF",
    },

    text: {
      primary: "#00FF00",
      secondary: "#FF0000",
    },
  },
});
