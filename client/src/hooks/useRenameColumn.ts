import { useMutation } from "@apollo/client";
import { RENAME_COLUMN } from "../graphql/mutation";
import { GET_COLUMNS } from "../graphql/query";
import {
  RenameColumn,
  RenameColumnVariables,
} from "../graphql/__generated__/RenameColumn";

export const useRenameColumn = () => {
  const [mutate, { loading, error }] = useMutation<
    RenameColumn,
    RenameColumnVariables
  >(RENAME_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS }],
  });

  return { mutate, loading, error };
};
