import TaskModel from '../../../models/taskModel'
import { MutationMoveTaskArgs } from '../../../generated/types'
import { ITask } from '../../../interface'

export const moveTask = async (
    _,
    { taskId, columnId, rank }: MutationMoveTaskArgs
): Promise<ITask> => {
    try {
        return await TaskModel.findOneAndUpdate(
            { _id: taskId },
            { columnId, rank },
            { new: true }
        )
    } catch (error) {
        console.error(error)
    }
}
