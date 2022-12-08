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
  query GetColumns($workspaceId: String!) {
    getColumns(workspaceId: $workspaceId) {
      id
      name
    }
  }
`;

export const GET_TASKS_BY_COLUMN = gql`
  query GetTasksByColumn($columnId: String!) {
    getTasksByColumn(columnId: $columnId) {
      id
      name
      columnId
    }
  }
`;

export const GET_USER = gql`
  query GetUser($token: String!) {
    getUser(token: $token) {
      id
      username
    }
  }
`;

export const GET_WORKSPACE = gql`
  query GetWorkspace($userId: String!) {
    getWorkspace(userId: $userId) {
      id
      name
    }
  }
`;
