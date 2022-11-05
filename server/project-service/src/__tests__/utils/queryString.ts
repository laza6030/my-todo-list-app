export const GET_WORKSPACE = `
    query GetWorkspace($userId: String!) {
        getWorkspace(userId: $userId) {
            id
            name
            userId
        }
    }
`
