import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      id
      username
      defaultWorkspaceId
    }
  }
`;

export const GET_COLUMNS = gql`
  query GetColumns($workspaceId: ID!) {
    getColumns(workspaceId: $workspaceId) {
      id
      name
    }
  }
`;

export const GET_TASKS_BY_COLUMN = gql`
  query GetTasksByColumn($columnId: ID!) {
    getTasksByColumn(columnId: $columnId) {
      id
      name
      columnId
      rank
    }
  }
`;

export const GET_WORKSPACE = gql`
  query GetWorkspace($userId: ID!) {
    getWorkspace(userId: $userId) {
      id
      name
    }
  }
`;
