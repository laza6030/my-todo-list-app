import { ApolloServer } from 'apollo-server'
import 'graphql-import-node'
import mongoose from 'mongoose'

import typeDefs from '../graphql/schema.graphql'
import resolvers from '../graphql/resolvers'

import WorkspaceModel from '../models/workspaceModel'
import ColumnModel from '../models/columnModel'

import { MongoMemoryServer } from 'mongodb-memory-server'

require('dotenv').config()

import {
    GET_WORKSPACE,
    CREATE_COLUMN,
    CREATE_WORKSPACE,
    GET_COLUMNS,
    DELETE_WORKSPACE,
} from './utils'

const server = new ApolloServer({ typeDefs, resolvers })

beforeAll(async () => {
    const mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()
    await mongoose.connect(uri, { dbName: 'test' })
})

afterAll(async () => {
    await mongoose.disconnect()
})

// create column
describe('Given a column name and a workspace id', () => {
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
                name: 'my workspace',
                userId: '41224d776a326fb40f000000',
            },
        })

        expect(result.data.createWorkspace).toHaveProperty(
            'name',
            'my workspace'
        )
        expect(result.data.createWorkspace).toHaveProperty(
            'userId',
            '41224d776a326fb40f000000'
        )
    })
})

// Add workspace name should be unique test

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
    it.only('should remove the workspace and return true', async () => {
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
