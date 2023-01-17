import { ComponentMeta, ComponentStory } from "@storybook/react";

import Workspace from "./Workspace";

export default {
  title: "Workspace",
  component: Workspace,
} as ComponentMeta<typeof Workspace>;

export const Primary: ComponentStory<typeof Workspace> = () => <Workspace />;
