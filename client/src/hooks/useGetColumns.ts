import { useQuery } from "@apollo/client";
import { GET_COLUMNS } from "../graphql/query";
import { GetColumns } from "../graphql/__generated__/GetColumns";
import { useDisplayer } from "./useDisplayer";

export const useGetColumns = () => {
  const { displayError } = useDisplayer();
  const { data, loading } = useQuery<GetColumns>(GET_COLUMNS, {
    onError: () => displayError("Error while fetching column(s)"),
  });

  return { data, loading };
};
