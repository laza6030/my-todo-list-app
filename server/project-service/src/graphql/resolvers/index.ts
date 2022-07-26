import { getColumns, getTasksByColumn, getWorkspace } from './query'
import {
    createColumn,
    deleteColumn,
    renameColumn,
    createTask,
    deleteTask,
    moveTask,
    createWorkspace,
    deleteWorkspace,
} from './mutation'

import User from './user'

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
        deleteWorkspace,
    },
    ...User,
}
