import { Schema, model } from 'mongoose'
import { ITask } from '../interface'

const TaskSchema = new Schema<ITask>({
    name: {
        type: Schema.Types.String,
        required: true,
    },

    columnId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
})

const Task = model('Task', TaskSchema)

export default Task
