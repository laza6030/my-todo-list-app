import { ApolloServer, gql } from 'apollo-server'
import mongoose from 'mongoose'
require('dotenv').config()

import { MONGODB_URI } from './config'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.on('error', () => console.log('error'))

db.once('open', () => console.log('connected to the database'))

const typeDefs = gql`
    type Query {
        hello: String
    }
`
const resolvers = {
    Query: {
        hello: () => 'Hello world',
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`server running at ${url}`)
})
