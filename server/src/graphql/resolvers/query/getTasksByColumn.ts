import { QueryGetTasksByColumnArgs } from '../../../generated/types'
import TaskModel from '../../../models/taskModel'

export const getTasksByColumn = async (
    _,
    { columnId }: QueryGetTasksByColumnArgs
) => {
    const tasks = await TaskModel.find({ columnId })
    return tasks
}
