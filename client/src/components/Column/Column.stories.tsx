import { ComponentMeta, ComponentStory } from "@storybook/react";

import Column from "./Column";

export default {
  title: "Column",
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "My list",
  id: "6385e67291e632607cebedd4",
};
