import {
  TypeBackground,
  PaletteOptions,
  PaletteColor,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    disabled: string;
    secondary: string;
  }

  interface PaletteOptions {}

  interface Palette {}
}
