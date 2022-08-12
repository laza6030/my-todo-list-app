import { useMutation } from "@apollo/client";
import {
  CreateTask,
  CreateTaskVariables,
} from "../graphql/__generated__/CreateTask";
import { CREATE_TASK } from "../graphql/mutation";

export const useCreateTask = () => {
  const [mutate, { loading, error }] = useMutation<
    CreateTask,
    CreateTaskVariables
  >(CREATE_TASK);

  return { mutate, loading, error };
};
