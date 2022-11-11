import { useMutation } from "@apollo/client";
import { DELETE_COLUMN } from "../../graphql/mutation";
import { GET_COLUMNS } from "../../graphql/query";
import {
  DeleteColumn,
  DeleteColumnVariables,
} from "../../graphql/__generated__/DeleteColumn";
import { useDisplayer } from "../useDisplayer";

export const useDeleteColumn = (workspaceId: string) => {
  const { displaySuccess, displayError } = useDisplayer();
  const [mutate, { loading, error }] = useMutation<
    DeleteColumn,
    DeleteColumnVariables
  >(DELETE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS, variables: { workspaceId } }],
    onCompleted: () => displaySuccess("Column deleted successfully"),
    onError: () => displayError("Error when deleting column"),
  });

  const deleteColumn = (variables: DeleteColumnVariables) =>
    mutate({ variables });

  return { deleteColumn, loading, error };
};
