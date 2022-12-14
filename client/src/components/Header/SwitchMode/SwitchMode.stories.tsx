import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ModeProvider } from "../../../context/ModeContext";
import SwitchMode from "./SwitchMode";

export default {
  titlle: "SwitchMode",
  component: SwitchMode,
  decorators: [
    (Story: any) => (
      <ModeProvider>
        <Story />
      </ModeProvider>
    ),
  ],
} as ComponentMeta<typeof SwitchMode>;

export const LigthMode: ComponentStory<typeof SwitchMode> = () => (
  <SwitchMode />
);
