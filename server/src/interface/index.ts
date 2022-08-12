import { Document, ObjectId } from 'mongoose'

export interface IColumn extends Document {
    id: string
    name: string
}

export interface ITask extends Document {
    id: string
    name: string
    columnId: ObjectId
}
