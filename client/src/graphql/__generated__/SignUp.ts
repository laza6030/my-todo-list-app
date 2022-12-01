/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_signUp {
  __typename: "SignUp";
  id: string | null;
  username: string | null;
  token: string;
  defaultWorkspaceId: string | null;
}

export interface SignUp {
  signUp: SignUp_signUp;
}

export interface SignUpVariables {
  input: UserInput;
}
