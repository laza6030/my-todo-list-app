import { Schema, model } from 'mongoose'
import { IColumn } from '../interface'

const ColumnSchema = new Schema<IColumn>({
    name: {
        type: Schema.Types.String,
        required: true,
    },

    workspaceId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
})

const Column = model('Column', ColumnSchema)

export default Column
