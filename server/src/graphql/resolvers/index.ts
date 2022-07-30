import { getColumns } from './query'
import { createColumn, deleteColumn } from './mutation'

export default {
    Query: { getColumns },
    Mutation: { createColumn, deleteColumn },
}
