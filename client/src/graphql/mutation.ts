import { gql } from "@apollo/client";

export const CREATE_COLUMN = gql`
  mutation CreateColumn($name: String!, $workspaceId: String!) {
    createColumn(name: $name, workspaceId: $workspaceId) {
      id
      name
    }
  }
`;

export const DELETE_COLUMN = gql`
  mutation DeleteColumn($id: String!) {
    deleteColumn(id: $id)
  }
`;

export const RENAME_COLUMN = gql`
  mutation RenameColumn($id: String!, $name: String!) {
    renameColumn(id: $id, name: $name)
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($columnId: String!, $name: String!) {
    createTask(columnId: $columnId, name: $name) {
      id
      name
      columnId
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(id: $id)
  }
`;

export const MOVE_TASK = gql`
  mutation MoveTask($taskId: String!, $columnId: String!) {
    moveTask(taskId: $taskId, columnId: $columnId) {
      id
      name
      columnId
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($input: UserInput!) {
    signUp(input: $input) {
      id
      username
      token
      defaultWorkspaceId
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($input: UserInput!) {
    signIn(input: $input) {
      token
      defaultWorkspaceId
    }
  }
`;

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($name: String!, $userId: String!) {
    createWorkspace(name: $name, userId: $userId) {
      id
      name
      userId
    }
  }
`;

export const DELETE_WORKSPACE = gql`
  mutation DeleteWorkspace($workspaceId: String!) {
    deleteWorkspace(workspaceId: $workspaceId)
  }
`;
