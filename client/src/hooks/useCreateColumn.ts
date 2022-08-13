import { useMutation } from "@apollo/client";
import { CREATE_COLUMN } from "../graphql/mutation";
import { GET_COLUMNS } from "../graphql/query";
import {
  CreateColumn,
  CreateColumnVariables,
} from "../graphql/__generated__/CreateColumn";

export const useCreateColumn = () => {
  const [mutate, { loading, error }] = useMutation<
    CreateColumn,
    CreateColumnVariables
  >(CREATE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS }],
  });

  const createColumn = (variables: CreateColumnVariables) =>
    mutate({ variables });

  return { createColumn, loading, error };
};
