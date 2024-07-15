import { gql } from "@apollo/client";

export const CREATE_COLUMN = gql`
  mutation CreateColumn($name: String!, $workspaceId: ID!) {
    createColumn(name: $name, workspaceId: $workspaceId) {
      id
      name
    }
  }
`;

export const DELETE_COLUMN = gql`
  mutation DeleteColumn($id: ID!) {
    deleteColumn(id: $id)
  }
`;

export const RENAME_COLUMN = gql`
  mutation RenameColumn($id: ID!, $name: String!) {
    renameColumn(id: $id, name: $name)
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($columnId: ID!, $name: String!, $rank: Int!) {
    createTask(columnId: $columnId, name: $name, rank: $rank) {
      id
      name
      columnId
      rank
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

export const MOVE_TASK = gql`
  mutation MoveTask($taskId: ID!, $columnId: ID!, $rank: Int!) {
    moveTask(taskId: $taskId, columnId: $columnId, rank: $rank) {
      id
      name
      columnId
      rank
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
    }
  }
`;

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($name: String!, $userId: ID!) {
    createWorkspace(name: $name, userId: $userId) {
      id
      name
      userId
    }
  }
`;

export const DELETE_WORKSPACE = gql`
  mutation DeleteWorkspace($workspaceId: ID!) {
    deleteWorkspace(workspaceId: $workspaceId)
  }
`;
