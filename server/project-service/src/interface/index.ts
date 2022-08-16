import { Types } from 'mongoose'

export interface IColumn {
    id: Types.ObjectId
    name: string
}

export interface ITask {
    name: string
    columnId: Types.ObjectId
}
