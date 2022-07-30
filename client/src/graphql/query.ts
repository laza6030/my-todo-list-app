import { gql } from "@apollo/client";

export const GET_COLUMNS = gql`
  query GetColumns {
    getColumns {
      name
    }
  }
`;
