import { useNavigate } from "react-router-dom";
import { ApolloError, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";
import { SignIn, SignInVariables } from "../graphql/__generated__/SignIn";
import { APOLLO_ERROR_CODE } from "../constants";
import { useDisplayer } from "./useDisplayer";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { displayError } = useDisplayer();

  const [mutate, { loading, error }] = useMutation<SignIn, SignInVariables>(
    SIGN_IN,
    {
      onCompleted: (data: SignIn) => {
        if (data.signIn) {
          localStorage.setItem("token", data.signIn);
          navigate("/dashboard");
          window.location.reload();
        }
      },

      onError: (error: ApolloError) => {
        if (
          error.graphQLErrors[0].extensions.code ===
          APOLLO_ERROR_CODE.USER_NOT_FOUND
        ) {
          displayError("User not found...");
        } else displayError("Error when logging...");
      },
    }
  );

  const signIn = (variables: SignInVariables) => mutate({ variables });

  return { signIn, loading, error };
};
