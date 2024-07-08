import { MutationCreateTaskArgs } from '../../../generated/types'
import TaskModel from '../../../models/taskModel'

export const createTask = async (
    _,
    { columnId, name, rank }: MutationCreateTaskArgs
) => {
    try {
        const task = new TaskModel({ columnId, name, rank })
        return await task.save()
    } catch (error) {
        console.error(error)
    }
}
