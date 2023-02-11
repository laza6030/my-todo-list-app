import { ComponentMeta, ComponentStory } from "@storybook/react";

import SignIn from ".";

export default {
  title: "SignIn",
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

export const Default: ComponentStory<typeof SignIn> = () => <SignIn />;
