import { Types } from 'mongoose'

export interface IColumn {
    id: Types.ObjectId
    name: string
    workspaceId: Types.ObjectId
}

export interface ITask {
    id: Types.ObjectId
    name: string
    columnId: Types.ObjectId
    rank: number
}

export interface IWorkspace {
    id: Types.ObjectId
    name: string
    userId: Types.ObjectId
}

export interface IContext {
    userId: string
}
