import { getColumns } from './query'
import { createColumn, deleteColumn, renameColumn } from './mutation'

export default {
    Query: { getColumns },
    Mutation: { createColumn, deleteColumn, renameColumn },
}
