/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MoveTask
// ====================================================

export interface MoveTask_moveTask {
  __typename: "Task";
  id: string;
  name: string;
  columnId: string;
  rank: number;
}

export interface MoveTask {
  moveTask: MoveTask_moveTask;
}

export interface MoveTaskVariables {
  taskId: string;
  columnId: string;
  rank: number;
}
