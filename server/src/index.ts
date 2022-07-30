import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
require('dotenv').config()

import resolvers from './graphql/resolvers'
import { MONGODB_URI } from './config'

import 'graphql-import-node'

const typeDefs = require('./graphql/schema.graphql')

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.on('error', () => console.log('error'))

db.once('open', () => console.log('connected to the database'))

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`server running at ${url}`)
})
