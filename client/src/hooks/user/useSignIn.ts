import { useNavigate } from "react-router-dom";
import { ApolloError, useMutation } from "@apollo/client";
import { SIGN_IN } from "../../graphql/mutation";
import { SignIn, SignInVariables } from "../../graphql/__generated__/SignIn";
import { APOLLO_ERROR_CODE } from "../../constants";
import { useDisplayer } from "../useDisplayer";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { displayError } = useDisplayer();

  const [mutate, { loading, error }] = useMutation<SignIn, SignInVariables>(
    SIGN_IN,
    {
      onCompleted: (data: SignIn) => {
        if (data.signIn) {
          const { token, defaultWorkspaceId } = data.signIn;
          localStorage.setItem("token", token);
          navigate(`/dashboard/${defaultWorkspaceId}`);
          window.location.reload();
        }
      },

      onError: (error: ApolloError) => {
        switch (error.graphQLErrors[0].extensions.code) {
          case APOLLO_ERROR_CODE.USER_NOT_FOUND:
            displayError("User not found...");
            break;

          case APOLLO_ERROR_CODE.WRONG_PASSWORD:
            displayError("Wrong password, please try again...");
            break;

          default:
            displayError("Error when logging...");
            break;
        }
      },
    }
  );

  const signIn = (variables: SignInVariables) => mutate({ variables });

  return { signIn, loading, error };
};
