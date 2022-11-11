import { useMutation } from "@apollo/client";

import {
  DeleteWorkspace,
  DeleteWorkspaceVariables,
} from "../../graphql/__generated__/DeleteWorkspace";

import { DELETE_WORKSPACE } from "../../graphql/mutation";
import { GET_WORKSPACE } from "../../graphql/query";

export const useDeleteWorkspace = (onComplete?: () => void) => {
  const [mutate, { loading }] = useMutation<
    DeleteWorkspace,
    DeleteWorkspaceVariables
  >(DELETE_WORKSPACE, {
    refetchQueries: [GET_WORKSPACE],
    onCompleted: () => {
      onComplete?.();
    },
  });

  const deleteWorkspace = (variables: DeleteWorkspaceVariables) =>
    mutate({ variables });

  return { deleteWorkspace, loading };
};
