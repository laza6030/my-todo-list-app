import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../graphql/mutation";
import { SignUp, SignUpVariables } from "../../graphql/__generated__/SignUp";
import { useDisplayer } from "../useDisplayer";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { displayError, displaySuccess } = useDisplayer();

  const [mutate, { loading, error }] = useMutation<SignUp, SignUpVariables>(
    SIGN_UP,
    {
      onError: () => displayError("Error when registrating..."),
      onCompleted: (data) => {
        displaySuccess("Registrated...");
        localStorage.setItem("token", data.signUp.token);
        navigate(`/dashboard/${data.signUp.defaultWorkspaceId}`);
        window.location.reload();
      },
    }
  );

  const signUp = (variables: SignUpVariables) => mutate({ variables });

  return { signUp, loading, error };
};
