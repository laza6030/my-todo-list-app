import { buildSubgraphSchema } from '@apollo/subgraph'
import { ApolloServer } from 'apollo-server'
import 'graphql-import-node'
import mongoose from 'mongoose'

import typeDefs from '../graphql/schema.graphql'
import resolvers from '../graphql/resolvers'

import WorkspaceModel from '../models/workspaceModel'
import ColumnModel from '../models/columnModel'
import TaskModel from '../models/taskModel'

import { MongoMemoryServer } from 'mongodb-memory-server'

require('dotenv').config()

import {
    GET_WORKSPACE,
    CREATE_COLUMN,
    CREATE_WORKSPACE,
    GET_COLUMNS,
    DELETE_WORKSPACE,
    CREATE_TASK,
    MOVE_TASK,
    GET_TASKS_BY_COLUMN,
} from './utils'

const server = new ApolloServer({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
})

beforeAll(async () => {
    const mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()
    await mongoose.connect(uri, { dbName: 'test' })
})

afterAll(async () => {
    await mongoose.disconnect()
})

// create column
describe('given a column name and a workspace id', () => {
    it('should create column with the same name and workspace id', async () => {
        const result = await server.executeOperation({
            query: CREATE_COLUMN,
            variables: {
                name: 'my column',
                workspaceId: '6365604e5739438d091a2dbf',
            },
        })

        expect(result.data.createColumn).toHaveProperty('name', 'my column')
        expect(result.data.createColumn).toHaveProperty(
            'workspaceId',
            '6365604e5739438d091a2dbf'
        )
    })
})

// Column name should be unique in a workspace
describe('given a column name that already exists', () => {
    it('should return column with the same name already exisits error', async () => {
        const column = new ColumnModel({
            name: 'new column',
            workspaceId: '6365604e5739438d091a2dbf',
        })

        await column.save()

        const result = await server.executeOperation({
            query: CREATE_COLUMN,
            variables: {
                name: 'new column',
                workspaceId: '6365604e5739438d091a2dbf',
            },
        })

        expect(result.errors[0].message).toEqual(
            'Column with the same name already exists'
        )
    })
})

// Get task by column
describe('given a column id', () => {
    it('should return all task related to it', async () => {
        const task1 = new TaskModel({
            _id: '6365604e5739438d091a2dbd',
            columnId: '6365604e5739438d091a2dbe',
            name: 'test 1',
            rank: 0,
        })

        const task2 = new TaskModel({
            _id: '6365604e5739438d091a2dba',
            columnId: '6365604e5739438d091a2dbe',
            name: 'test 2',
            rank: 1,
        })

        await task1.save()
        await task2.save()

        const result = await server.executeOperation({
            query: GET_TASKS_BY_COLUMN,
            variables: {
                columnId: '6365604e5739438d091a2dbe',
            },
        })

        expect(result.data.getTasksByColumn).toHaveLength(2)
        expect(result.data.getTasksByColumn[0]).toEqual({
            id: '6365604e5739438d091a2dbd',
            columnId: '6365604e5739438d091a2dbe',
            name: 'test 1',
            rank: 0,
        })
        expect(result.data.getTasksByColumn[1]).toEqual({
            id: '6365604e5739438d091a2dba',
            columnId: '6365604e5739438d091a2dbe',
            name: 'test 2',
            rank: 1,
        })
    })
})

// Create task
describe('given a columnId and a task name', () => {
    it('should create and return new task', async () => {
        const result = await server.executeOperation({
            query: CREATE_TASK,
            variables: {
                columnId: '6365604e5739438d091a2dbe',
                name: 'my task',
                rank: 0,
            },
        })

        expect(result.data.createTask).toHaveProperty(
            'columnId',
            '6365604e5739438d091a2dbe'
        )
        expect(result.data.createTask).toHaveProperty('name', 'my task')
        expect(result.data.createTask).toHaveProperty('rank', 0)
    })
})

// Move task
describe('given a taskId and a rank', () => {
    it('should update task with new rank and return it', async () => {
        const task = new TaskModel({
            _id: '6365604e5739438d091a2dfa',
            columnId: '6365604e5739438d091a2dbe',
            name: 'test',
            rank: 0,
        })

        await task.save()

        const result = await server.executeOperation({
            query: MOVE_TASK,
            variables: {
                columnId: '6365604e5739438d091a2dbe',
                taskId: '6365604e5739438d091a2dfa',
                rank: 1,
            },
        })

        expect(result.data.moveTask).toHaveProperty('rank', 1)
    })
})

// Get columns
describe('given a workspaceId', () => {
    it('should return all related colums', async () => {
        const column = new ColumnModel({
            name: 'my column',
            workspaceId: '6365604e5739438d091a2dbe',
        })

        await column.save()

        const result = await server.executeOperation({
            query: GET_COLUMNS,
            variables: { workspaceId: '6365604e5739438d091a2dbe' },
        })

        expect(result.data.getColumns[0]).toHaveProperty('name', 'my column')
    })
})

// Create workspace
describe('Given a name and a userId', () => {
    it('should create create and return a workspace with same name and id', async () => {
        const result = await server.executeOperation({
            query: CREATE_WORKSPACE,
            variables: {
                name: 'new workspace',
                userId: '41224d776a326fb40f000000',
            },
        })

        expect(result.data.createWorkspace).toHaveProperty(
            'name',
            'new workspace'
        )
        expect(result.data.createWorkspace).toHaveProperty(
            'userId',
            '41224d776a326fb40f000000'
        )
    })
})

// workspace name should be unique test

describe('Given a workspace name that already exists', () => {
    it('should return workspace with same name already exists error', async () => {
        const workspace1 = new WorkspaceModel({
            _id: '6365604e5739438d091a2dbd',
            name: 'workspace1',
            userId: '41224d776a326fb40f000002',
        })

        await workspace1.save()

        const result = await server.executeOperation({
            query: CREATE_WORKSPACE,
            variables: {
                _id: '6365604e5739438d091a2dbf',
                name: 'workspace1',
                userId: '41224d776a326fb40f000002',
            },
        })

        expect(result.errors[0].message).toEqual(
            'Workspace with the same name already exists'
        )
    })
})

// Get workspace
describe('Given a user id', () => {
    it('should return all the related workspace', async () => {
        const workspace1 = new WorkspaceModel({
            _id: '6365604e5739438d091a2dbe',
            name: 'workspace1',
            userId: '41224d776a326fb40f000001',
        })
        const workspace2 = new WorkspaceModel({
            _id: '6365604e5739438d091a2dc0',
            name: 'workspace2',
            userId: '41224d776a326fb40f000001',
        })
        await workspace1.save()
        await workspace2.save()

        const result = await server.executeOperation({
            query: GET_WORKSPACE,
            variables: { userId: '41224d776a326fb40f000001' },
        })

        expect(result.data.getWorkspace).toEqual([
            {
                id: '6365604e5739438d091a2dbe',
                name: 'workspace1',
                userId: '41224d776a326fb40f000001',
            },
            {
                id: '6365604e5739438d091a2dc0',
                name: 'workspace2',
                userId: '41224d776a326fb40f000001',
            },
        ])
    })
})

// Delete workspace
describe('Given a workspaceId', () => {
    it('should remove the workspace and return true', async () => {
        const workspace1 = new WorkspaceModel({
            _id: '6365604e5739438d091a2dba',
            name: 'workspace1',
            userId: '41224d776a326fb40f000001',
        })

        await workspace1.save()

        const result = await server.executeOperation({
            query: DELETE_WORKSPACE,
            variables: {
                workspaceId: '6365604e5739438d091a2dba',
            },
        })

        expect(result.data.deleteWorkspace).toEqual(true)
    })
})
