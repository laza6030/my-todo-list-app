import { ObjectId } from 'mongoose'

export interface IColumn {
    id: string
    name: string
}

export interface ITask {
    id: string
    name: string
    columnId: ObjectId
}
