/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTask
// ====================================================

export interface CreateTask_createTask {
  __typename: "Task";
  id: string;
  name: string;
  columnId: string;
  rank: number;
}

export interface CreateTask {
  createTask: CreateTask_createTask | null;
}

export interface CreateTaskVariables {
  columnId: string;
  name: string;
  rank: number;
}
