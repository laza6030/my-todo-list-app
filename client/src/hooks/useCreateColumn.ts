import { useMutation } from "@apollo/client";
import { CREATE_COLUMN } from "../graphql/mutation";
import {
  CreateColumn,
  CreateColumnVariables,
} from "../graphql/__generated__/CreateColumn";

export const useCreateColumn = () => {
  const [mutate, { loading, error }] = useMutation<
    CreateColumn,
    CreateColumnVariables
  >(CREATE_COLUMN);

  return { mutate, loading, error };
};
