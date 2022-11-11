export const GET_WORKSPACE = `
    query GetWorkspace($userId: String!) {
        getWorkspace(userId: $userId) {
            id
            name
            userId
        }
    }
`
export const CREATE_COLUMN = `
    mutation CreateColumn($name: String!, $workspaceId: String!) {
        createColumn(name: $name, workspaceId: $workspaceId) {
            id
            name
            workspaceId
        }
    }
`

export const CREATE_WORKSPACE = `
    mutation CreateWorkspace($name: String!, $userId: String!) {
        createWorkspace(name: $name, userId: $userId) {
            id
            name
            userId
        }
    }
`
export const GET_COLUMNS = `
    query GetColumns($workspaceId: String!) {
        getColumns(workspaceId: $workspaceId) {
            id
            name
        }
    }
`
export const DELETE_WORKSPACE = `
    mutation DeleteWorkspace($workspaceId: String!) {
        deleteWorkspace(workspaceId: $workspaceId)
    }
`
