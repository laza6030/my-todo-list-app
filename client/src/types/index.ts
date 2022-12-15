export type Mode = "light" | "dark";

export interface IThemeContext {
  mode: Mode;
  changeMode: () => void;
}
