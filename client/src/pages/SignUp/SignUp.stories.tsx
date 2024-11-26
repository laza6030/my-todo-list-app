import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignUp from ".";

export default {
  title: "SignUp",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

export const Default: ComponentStory<typeof SignUp> = () => <SignUp />;
