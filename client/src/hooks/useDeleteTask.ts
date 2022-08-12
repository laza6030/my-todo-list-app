import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../graphql/mutation";
import { GET_TASKS_BY_COLUMN } from "../graphql/query";
import {
  DeleteTask,
  DeleteTaskVariables,
} from "../graphql/__generated__/DeleteTask";

export const useDeleteTask = (columnId: string) => {
  const [mutate, { loading, error }] = useMutation<
    DeleteTask,
    DeleteTaskVariables
  >(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS_BY_COLUMN, variables: { columnId } }],
  });

  return { mutate, loading, error };
};
