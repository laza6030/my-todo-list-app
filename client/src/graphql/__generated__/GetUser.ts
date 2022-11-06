/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_getUser {
  __typename: "User";
  id: string | null;
  username: string | null;
}

export interface GetUser {
  getUser: GetUser_getUser | null;
}

export interface GetUserVariables {
  token: string;
}
