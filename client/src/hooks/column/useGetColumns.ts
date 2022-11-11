import { useQuery } from "@apollo/client";
import { GET_COLUMNS } from "../../graphql/query";
import {
  GetColumns,
  GetColumnsVariables,
} from "../../graphql/__generated__/GetColumns";
import { useDisplayer } from "../useDisplayer";

export const useGetColumns = (workspaceId: string) => {
  const { displayError } = useDisplayer();
  const { data, loading } = useQuery<GetColumns, GetColumnsVariables>(
    GET_COLUMNS,
    {
      variables: { workspaceId },
      onError: () => displayError("Error while fetching column(s)"),
    }
  );

  return { data, loading };
};
