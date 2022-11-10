import { useMutation } from "@apollo/client";
import { RENAME_COLUMN } from "../../graphql/mutation";
import { GET_COLUMNS } from "../../graphql/query";
import {
  RenameColumn,
  RenameColumnVariables,
} from "../../graphql/__generated__/RenameColumn";
import { useDisplayer } from "../useDisplayer";

export const useRenameColumn = () => {
  const { displaySuccess } = useDisplayer();
  const [mutate, { loading, error }] = useMutation<
    RenameColumn,
    RenameColumnVariables
  >(RENAME_COLUMN, {
    refetchQueries: [{ query: GET_COLUMNS }],
    onCompleted: () => displaySuccess("Renamed"),
  });

  return { mutate, loading, error };
};
