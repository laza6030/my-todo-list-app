import { Document } from 'mongoose'

export interface IColumn extends Document {
    id: string
    name: string
}
