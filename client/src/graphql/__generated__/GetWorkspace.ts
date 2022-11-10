/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkspace
// ====================================================

export interface GetWorkspace_getWorkspace {
  __typename: "Workspace";
  id: string;
  name: string;
}

export interface GetWorkspace {
  getWorkspace: (GetWorkspace_getWorkspace | null)[];
}

export interface GetWorkspaceVariables {
  userId: string;
}
