import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";
import { SignIn, SignInVariables } from "../graphql/__generated__/SignIn";
import { useDisplayer } from "./useDisplayer";

export const useSignIn = () => {
  const { displayError } = useDisplayer();

  const [mutate, { loading, error }] = useMutation<SignIn, SignInVariables>(
    SIGN_IN,
    {
      onCompleted: (data: SignIn) => {
        if (data.signIn) localStorage.setItem("token", data.signIn);
      },

      onError: () => displayError("Error when logging..."),
    }
  );

  const signIn = (variables: SignInVariables) => mutate({ variables });

  return { signIn, loading, error };
};
