import { QueryGetTasksByColumnArgs } from '../../../generated/types'
import TaskModel from '../../../models/taskModel'

export const getTasksByColumn = async (
    _,
    { columnId }: QueryGetTasksByColumnArgs
) => {
    const tasks = (await TaskModel.find({ columnId })).sort((a, b) => a.rank - b.rank)
    return tasks
}
