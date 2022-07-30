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
