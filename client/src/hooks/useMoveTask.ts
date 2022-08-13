import { useMutation } from "@apollo/client";
import { MOVE_TASK } from "../graphql/mutation";
import { GET_TASKS_BY_COLUMN } from "../graphql/query";
import { MoveTask, MoveTaskVariables } from "../graphql/__generated__/MoveTask";

export const useMoveTask = (columnId: string) => {
  const [mutate, { loading, error }] = useMutation<MoveTask, MoveTaskVariables>(
    MOVE_TASK,
    {
      refetchQueries: [{ query: GET_TASKS_BY_COLUMN, variables: { columnId } }],
    }
  );

  const moveTask = (variables: MoveTaskVariables) => mutate({ variables });

  return { moveTask, loading, error };
};
