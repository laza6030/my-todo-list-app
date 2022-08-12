import { MutationDeleteColumnArgs } from '../../../generated/types'
import ColumnModel from '../../../models/columnModel'

export const deleteColumn = async (_, { id }: MutationDeleteColumnArgs) => {
    try {
        await ColumnModel.deleteOne({ _id: id })
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
