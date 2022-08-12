import { getColumns } from './query'
import {
    createColumn,
    deleteColumn,
    renameColumn,
    createTask,
} from './mutation'

export default {
    Query: { getColumns },
    Mutation: { createColumn, deleteColumn, renameColumn, createTask },
}
