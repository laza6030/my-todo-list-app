import { gql } from "@apollo/client";

export const CREATE_COLUMN = gql`
  mutation CreateColumn($name: String!) {
    createColumn(name: $name) {
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
  mutation SignUp($input: SignUpInput) {
    signUp(input: $input) {
      id
      name
    }
  }
`;
