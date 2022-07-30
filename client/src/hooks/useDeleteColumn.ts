import { useMutation } from "@apollo/client";
import { DELETE_COLUMN } from "../graphql/mutation";
import {
  DeleteColumn,
  DeleteColumnVariables,
} from "../graphql/__generated__/DeleteColumn";

export const useDeleteColumn = () => {
  const [mutate, { loading, error }] = useMutation<
    DeleteColumn,
    DeleteColumnVariables
  >(DELETE_COLUMN);

  return { mutate, loading, error };
};
