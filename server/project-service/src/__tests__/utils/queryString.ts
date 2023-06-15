import { gql } from 'apollo-server'

// Query
export const GET_WORKSPACE = gql`
    query GetWorkspace($userId: ID!) {
        getWorkspace(userId: $userId) {
            id
            name
            userId
        }
    }
`
export const GET_COLUMNS = gql`
    query GetColumns($workspaceId: ID!) {
        getColumns(workspaceId: $workspaceId) {
            id
            name
        }
    }
`

export const GET_TASKS_BY_COLUMN = gql`
    query GetTasksByColumn($columnId: ID!) {
        getTasksByColumn(columnId: $columnId) {
            id
            columnId
            name
            rank
        }
    }
`
// Mutation
export const CREATE_COLUMN = gql`
    mutation CreateColumn($name: String!, $workspaceId: ID!) {
        createColumn(name: $name, workspaceId: $workspaceId) {
            id
            name
            workspaceId
        }
    }
`

export const CREATE_WORKSPACE = gql`
    mutation CreateWorkspace($name: String!, $userId: ID!) {
        createWorkspace(name: $name, userId: $userId) {
            id
            name
            userId
        }
    }
`
export const DELETE_WORKSPACE = gql`
    mutation DeleteWorkspace($workspaceId: ID!) {
        deleteWorkspace(workspaceId: $workspaceId)
    }
`
export const CREATE_TASK = gql`
    mutation CreateTask($columnId: ID!, $name: String!, $rank: Int!) {
        createTask(columnId: $columnId, name: $name, rank: $rank) {
            id
            columnId
            name
            rank
        }
    }
`
export const MOVE_TASK = gql`
    mutation moveTask($taskId: ID!, $columnId: ID!, $rank: Int!) {
        moveTask(taskId: $taskId, columnId: $columnId, rank: $rank) {
            id
            columnId
            name
            rank
        }
    }
`
