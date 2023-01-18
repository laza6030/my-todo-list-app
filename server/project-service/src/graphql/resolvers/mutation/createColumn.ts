import { MutationCreateColumnArgs } from '../../../generated/types'
import ColumnModel from '../../../models/columnModel'

export const createColumn = async (
    _,
    { name, workspaceId }: MutationCreateColumnArgs
) => {
    try {
        const columnWithSameName = await ColumnModel.findOne({
            name,
            workspaceId,
        })

        if (columnWithSameName)
            return new Error('Column with the same name already exists')

        const column = new ColumnModel({ name, workspaceId })

        return await column.save()
    } catch (error) {
        console.error(error)
    }
}
