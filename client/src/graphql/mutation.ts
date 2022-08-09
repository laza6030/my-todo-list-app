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
