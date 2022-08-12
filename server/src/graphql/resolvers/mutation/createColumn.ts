import { MutationCreateColumnArgs, Column } from '../../../generated/types'
import ColumnModel from '../../../models/columnModel'

export const createColumn = async (
    _,
    { name }: MutationCreateColumnArgs
): Promise<Column> => {
    try {
        const column = new ColumnModel({ name })
        return await column.save()
    } catch (error) {
        console.error(error)
    }
}
