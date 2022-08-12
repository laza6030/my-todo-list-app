import { MutationRenameColumnArgs } from '../../../generated/types'
import ColumnModel from '../../../models/columnModel'

export const renameColumn = async (
    _,
    { id, name }: MutationRenameColumnArgs
) => {
    try {
        await ColumnModel.findOneAndUpdate({ _id: id }, { name })
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
