import { MutationCreateColumnArgs, Column } from '../../../generated/types'
import ColumnModel from '../../../models/columnModels'

export const createColumn = async (
    _,
    { name }: MutationCreateColumnArgs
): Promise<Column> => {
    const column = new ColumnModel({ name })
    await column.save()
    return { name }
}