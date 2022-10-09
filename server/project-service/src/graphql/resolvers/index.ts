import { getColumns, getTasksByColumn } from './query'
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
    Query: { getColumns, getTasksByColumn },
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
