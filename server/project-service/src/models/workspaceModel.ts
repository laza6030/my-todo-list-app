import { Schema, model } from 'mongoose'
import { IWorkspace } from '../interface'

const WorkspaceSchema = new Schema<IWorkspace>({
    name: {
        type: Schema.Types.String,
        required: true,
    },

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
})

const Workspace = model('workspace', WorkspaceSchema)

export default Workspace
