import { ComponentMeta, ComponentStory } from "@storybook/react";

import WorkspaceMenu from "./WorkspaceMenu";

export default {
  title: "WorkspaceMenu",
  component: WorkspaceMenu,
} as ComponentMeta<typeof WorkspaceMenu>;

export const Primary: ComponentStory<typeof WorkspaceMenu> = () => (
  <WorkspaceMenu
    {...{
      userId: "storybook-test",
      workspace: [
        {
          __typename: "Workspace",
          id: "6362ba558b82783ee1aaf3ca",
          name: "workspace test",
        },
        {
          __typename: "Workspace",
          id: "6362ba558b82783ee1aaf3ca",
          name: "workspace test",
        },
      ],
    }}
  />
);
