/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateWorkspace
// ====================================================

export interface CreateWorkspace_createWorkspace {
  __typename: "Workspace";
  id: string;
  name: string;
  userId: string;
}

export interface CreateWorkspace {
  createWorkspace: CreateWorkspace_createWorkspace | null;
}

export interface CreateWorkspaceVariables {
  name: string;
  userId: string;
}
