import { gql } from "apollo-server";

export const SIGN_UP = gql`
  mutation signUp($input: UserInput) {
    signUp(input: $input) {
      id
      username
    }
  }
`;
