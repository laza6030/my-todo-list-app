import { gql } from "@apollo/client";

export const GET_COLUMNS = gql`
  query GetColumns {
    getColumns {
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
    }
  }
`;
