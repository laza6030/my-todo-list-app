import { Types } from 'mongoose'

export interface IColumn {
    name: string
}

export interface ITask {
    name: string
    columnId: Types.ObjectId
}
