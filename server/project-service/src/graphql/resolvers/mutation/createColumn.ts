import { MutationCreateColumnArgs } from '../../../generated/types'
import ColumnModel from '../../../models/columnModel'

export const createColumn = async (
    _,
    { name, workspaceId }: MutationCreateColumnArgs
) => {
    try {
        const column = new ColumnModel({ name, workspaceId })
        return await column.save()
    } catch (error) {
        console.error(error)
    }
}
