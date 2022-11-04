export const SIGN_IN = `
    mutation SignIn($input: UserInput!) {
        signIn(input: $input)
}`;

export const SIGN_UP = `
    mutation SignUp($input: UserInput!) {
        signUp(input: $input) {
        id
        username
        }
    }
`;
