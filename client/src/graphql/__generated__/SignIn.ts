/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================

export interface SignIn_signIn {
  __typename: "SignIn";
  token: string;
  defaultWorkspaceId: string;
}

export interface SignIn {
  signIn: SignIn_signIn;
}

export interface SignInVariables {
  input: UserInput;
}
