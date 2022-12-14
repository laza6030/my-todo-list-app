export type Mode = "light" | "dark";

export interface IModeContext {
  mode: Mode;
  changeMode: (mode: Mode) => void;
}
