import { MutationCreateTaskArgs } from '../../../generated/types'
import TaskModel from '../../../models/taskModel'

export const createTask = async (
    _,
    { columnId, name }: MutationCreateTaskArgs
) => {
    try {
        const task = new TaskModel({ columnId, name })
        return await task.save()
    } catch (error) {
        console.error(error)
    }
}
