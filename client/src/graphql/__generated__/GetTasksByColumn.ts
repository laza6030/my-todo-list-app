/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTasksByColumn
// ====================================================

export interface GetTasksByColumn_getTasksByColumn {
  __typename: "Task";
  id: string;
  name: string | null;
  columnId: string;
}

export interface GetTasksByColumn {
  getTasksByColumn: (GetTasksByColumn_getTasksByColumn | null)[] | null;
}

export interface GetTasksByColumnVariables {
  columnId: string;
}
