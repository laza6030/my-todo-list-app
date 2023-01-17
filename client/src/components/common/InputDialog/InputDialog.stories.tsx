import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputDialog from "./InputDialog";

export default {
  title: "InputDialog",
  component: InputDialog,
} as ComponentMeta<typeof InputDialog>;

export const Primary: ComponentStory<typeof InputDialog> = () => (
  <InputDialog
    {...{
      title: "Create workspace",
      placeholder: "workspace name",
      errorMessage: "workspace with this name already exits",
      isError: false,
      handleInputChange: () => {},
    }}
  />
);

export const Error: ComponentStory<typeof InputDialog> = () => (
  <InputDialog
    {...{
      title: "Create workspace",
      placeholder: "workspace name",
      errorMessage: "workspace with this name already exits",
      isError: true,
      handleInputChange: () => {},
    }}
  />
);
