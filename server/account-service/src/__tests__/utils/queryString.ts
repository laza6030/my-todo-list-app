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

export const GET_USER = `
    query GetUser($token: String!) {
        getUser(token: $token) {
            id
            username
        }
    }
`;
