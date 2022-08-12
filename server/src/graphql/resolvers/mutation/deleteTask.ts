import { MutationDeleteTaskArgs } from '../../../generated/types'
import TaskModel from '../../../models/taskModel'

export const deleteTask = async (_, { id }: MutationDeleteTaskArgs) => {
    try {
        await TaskModel.deleteOne({ _id: id })
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
