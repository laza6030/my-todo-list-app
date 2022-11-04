import { getColumns, getTasksByColumn, getWorkspace } from './query'
import {
    createColumn,
    deleteColumn,
    renameColumn,
    createTask,
    deleteTask,
    moveTask,
    createWorkspace,
} from './mutation'

export default {
    Query: { getColumns, getTasksByColumn, getWorkspace },
    Mutation: {
        createColumn,
        deleteColumn,
        renameColumn,
        createTask,
        deleteTask,
        moveTask,
        createWorkspace,
    },
}
