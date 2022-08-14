import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../graphql/mutation";
import { GET_TASKS_BY_COLUMN } from "../graphql/query";
import {
  DeleteTask,
  DeleteTaskVariables,
} from "../graphql/__generated__/DeleteTask";
import { useDisplayer } from "./useDisplayer";

export const useDeleteTask = (columnId: string) => {
  const { displaySuccess, displayError } = useDisplayer();
  const [mutate, { loading, error }] = useMutation<
    DeleteTask,
    DeleteTaskVariables
  >(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS_BY_COLUMN, variables: { columnId } }],
    onCompleted: () => displaySuccess("Task deleted successfully"),
    onError: () => displayError("Error when deleting task"),
  });

  const deleteTask = (variables: DeleteTaskVariables) => mutate({ variables });

  return { deleteTask, loading, error };
};
