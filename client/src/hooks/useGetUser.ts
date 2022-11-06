import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/query";
import { GetUser, GetUserVariables } from "../graphql/__generated__/GetUser";

export const useGetUser = (token: string) => {
  const { data, loading } = useQuery<GetUser, GetUserVariables>(GET_USER, {
    variables: { token },
  });

  return { user: data?.getUser, loading };
};
