import { ApolloServer } from 'apollo-server'
import 'graphql-import-node'
import mongoose from 'mongoose'

import typeDefs from '../graphql/schema.graphql'
import resolvers from '../graphql/resolvers'

import WorkspaceModel from '../models/workspaceModel'

import { MongoMemoryServer } from 'mongodb-memory-server'

require('dotenv').config()

import { GET_WORKSPACE, CREATE_COLUMN, CREATE_WORKSPACE } from './utils'

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
describe('Given a column name', () => {
    it('should create column with the same name', async () => {
        const result = await server.executeOperation({
            query: CREATE_COLUMN,
            variables: { name: 'my column' },
        })

        expect(result.data.createColumn.name).toEqual('my column')
    })
})

describe('Given creating a column', () => {
    it('should return fields id and name of the new column', async () => {
        const result = await server.executeOperation({
            query: CREATE_COLUMN,
            variables: { name: 'my column' },
        })

        expect(result.data.createColumn).toHaveProperty('id')
        expect(result.data.createColumn).toHaveProperty('name', 'my column')
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
