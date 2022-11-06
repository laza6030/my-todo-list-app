import { Types } from 'mongoose'

export interface IColumn {
    id: Types.ObjectId
    name: string
}

export interface ITask {
    id: Types.ObjectId
    name: string
    columnId: Types.ObjectId
}

export interface IWorkspace {
    id: Types.ObjectId
    name: string
    userId: Types.ObjectId
}
