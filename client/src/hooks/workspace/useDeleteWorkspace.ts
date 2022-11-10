import { useMutation } from "@apollo/client";

import {
  DeleteWorkspace,
  DeleteWorkspaceVariables,
} from "../../graphql/__generated__/DeleteWorkspace";

import { DELETE_WORKSPACE } from "../../graphql/mutation";

export const useDeleteWorkspace = () => {
  const [mutate, { loading }] = useMutation<
    DeleteWorkspace,
    DeleteWorkspaceVariables
  >(DELETE_WORKSPACE);

  const deleteWorkspace = (variables: DeleteWorkspaceVariables) =>
    mutate({ variables });

  return { deleteWorkspace, loading };
};
