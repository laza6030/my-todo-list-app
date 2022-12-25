import { ComponentMeta, ComponentStory } from "@storybook/react";

import SwitchMode from "./SwitchMode";

export default {
  titlle: "SwitchMode",
  component: SwitchMode,
} as ComponentMeta<typeof SwitchMode>;

export const SwitchModeStory: ComponentStory<typeof SwitchMode> = () => (
  <SwitchMode />
);
SwitchModeStory.storyName = "I'm the SwitchMode story";
