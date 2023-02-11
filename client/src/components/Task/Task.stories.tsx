import { ComponentMeta, ComponentStory } from "@storybook/react";

import Task from "./Task";

export default {
  title: "Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  columnId: "6385e67291e632607cebedd4",
  id: "6385e67991e632607cebedd8",
  name: "My task",
  refetch: () => {},
};

export const LongTaskName = Template.bind({});
LongTaskName.args = {
  columnId: "6385e67291e632607cebedd4",
  id: "6385e67991e632607cebedd8",
  name: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam hic minus possimus officia temporibus tempora iure! Accusantium, doloribus et. Enim sapiente dicta quos aliquam, doloremque quo tempora repudiandae esse accusantium.",
  refetch: () => {},
};
