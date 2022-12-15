import { ComponentMeta, ComponentStory } from "@storybook/react";

import SwitchMode from "./SwitchMode";

export default {
  titlle: "SwitchMode",
  component: SwitchMode,
} as ComponentMeta<typeof SwitchMode>;

export const LigthMode: ComponentStory<typeof SwitchMode> = () => (
  <SwitchMode />
);
