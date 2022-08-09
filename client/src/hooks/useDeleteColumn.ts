import { useMutation } from "@apollo/client";
import { DELETE_COLUMN } from "../graphql/mutation";
import { GET_COLUMNS } from "../graphql/query";
import {
  DeleteColumn,
  DeleteColumnVariables,
} from "../graphql/__generated__/DeleteColumn";

export const useDeleteColumn = () => {
  const [mutate, { loading, error }] = useMutation<
    DeleteColumn,
    DeleteColumnVariables
  >(DELETE_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS }],
  });

  return { mutate, loading, error };
};
