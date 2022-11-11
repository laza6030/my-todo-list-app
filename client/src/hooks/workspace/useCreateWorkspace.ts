import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_WORKSPACE } from "../../graphql/mutation";
import { GET_WORKSPACE } from "../../graphql/query";
import {
  CreateWorkspace,
  CreateWorkspaceVariables,
} from "../../graphql/__generated__/CreateWorkspace";

import { useDisplayer } from "../useDisplayer";

export const useCreateWorkspace = (
  userId: string,
  onCompleted?: () => void
) => {
  const navigate = useNavigate();
  const { displayError, displaySuccess } = useDisplayer();

  const [mutate, { loading }] = useMutation<
    CreateWorkspace,
    CreateWorkspaceVariables
  >(CREATE_WORKSPACE, {
    refetchQueries: [{ query: GET_WORKSPACE, variables: { userId } }],
    onCompleted: (data) => {
      onCompleted?.();
      navigate(`/dashboard/${data.createWorkspace?.id}`);
      displaySuccess("Workspace created successfully");
    },
    onError: () => displayError("Failed creating new workspace"),
  });

  const createWorkspace = (variables: CreateWorkspaceVariables) =>
    mutate({ variables });

  return { createWorkspace, loading };
};
