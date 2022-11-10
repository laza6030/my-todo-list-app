import { useMutation } from "@apollo/client";
import { CREATE_COLUMN } from "../graphql/mutation";
import { GET_COLUMNS } from "../graphql/query";
import {
  CreateColumn,
  CreateColumnVariables,
} from "../graphql/__generated__/CreateColumn";
import { useDisplayer } from "./useDisplayer";

export const useCreateColumn = (workspaceId: string) => {
  const { displaySuccess, displayError } = useDisplayer();

  const [mutate, { loading, error }] = useMutation<
    CreateColumn,
    CreateColumnVariables
  >(CREATE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS, variables: { workspaceId } }],
    onCompleted: () => displaySuccess("Column created successfully"),
    onError: () => displayError("Error when creating column"),
  });

  const createColumn = (variables: CreateColumnVariables) =>
    mutate({ variables });

  return { createColumn, loading, error };
};
