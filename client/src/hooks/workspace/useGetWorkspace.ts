import { useQuery } from "@apollo/client";

import {
  GetWorkspace,
  GetWorkspaceVariables,
} from "../../graphql/__generated__/GetWorkspace";

import { GET_WORKSPACE } from "../../graphql/query";

export const useGetWorkspace = (userId: string) => {
  const { data, loading } = useQuery<GetWorkspace, GetWorkspaceVariables>(
    GET_WORKSPACE,
    {
      variables: { userId },
    }
  );

  return { workspace: data?.getWorkspace, loading };
};
