import TaskModel from '../../../models/taskModel'
import { MutationMoveTaskArgs } from '../../../generated/types'

export const moveTask = async (
    _,
    { taskId, columnId }: MutationMoveTaskArgs
) => {
    try {
        return await TaskModel.findOneAndUpdate({ _id: taskId }, { columnId })
    } catch (error) {
        console.error(error)
    }
}
