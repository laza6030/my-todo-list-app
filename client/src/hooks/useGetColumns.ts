import { useQuery } from "@apollo/client";
import { GET_COLUMNS } from "../graphql/query";
import { GetColumns } from "../graphql/__generated__/GetColumns";

export const useGetColumns = () => {
  const { data, loading } = useQuery<GetColumns>(GET_COLUMNS);

  return { data, loading };
};
