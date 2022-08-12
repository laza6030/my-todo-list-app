import { useMutation } from "@apollo/client";
import {
  CreateTask,
  CreateTaskVariables,
} from "../graphql/__generated__/CreateTask";
import { CREATE_TASK } from "../graphql/mutation";
import { GET_TASKS_BY_COLUMN } from "../graphql/query";

export const useCreateTask = (columnId: String) => {
  const [mutate, { loading, error }] = useMutation<
    CreateTask,
    CreateTaskVariables
  >(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS_BY_COLUMN, variables: { columnId } }],
  });

  return { mutate, loading, error };
};
