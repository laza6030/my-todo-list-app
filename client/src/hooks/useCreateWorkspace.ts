import { useMutation } from "@apollo/client";

import { CREATE_WORKSPACE } from "../graphql/mutation";
import {
  CreateWorkspace,
  CreateWorkspaceVariables,
} from "../graphql/__generated__/CreateWorkspace";

import { useDisplayer } from "./useDisplayer";

export const useCreateWorkspace = () => {
  const { displayError, displaySuccess } = useDisplayer();

  const [mutate, { loading }] = useMutation<
    CreateWorkspace,
    CreateWorkspaceVariables
  >(CREATE_WORKSPACE, {
    onCompleted: () => displaySuccess("Workspace created successfully"),
    onError: () => displayError("Failed creating new workspace"),
  });

  const createWorkspace = (variables: CreateWorkspaceVariables) =>
    mutate({ variables });

  return { createWorkspace, loading };
};
