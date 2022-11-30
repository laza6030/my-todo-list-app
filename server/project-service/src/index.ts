require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import { buildSubgraphSchema } from '@apollo/subgraph'
import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import { MONGODB_URI, PORT } from './config'
import 'graphql-import-node'
import express from 'express'
import http from 'http'

import router from './routes/createWorkspace'

const typeDefs = require('./graphql/schema.graphql')

mongoose.connect(MONGODB_URI)
const db = mongoose.connection
db.on('error', () => console.log('error'))
db.once('open', () => console.log('connected to the database'))

const app = express()

app.use('/', router)

const httpServer = http.createServer(app)

const server = new ApolloServer({
    schema: buildSubgraphSchema({
        typeDefs,
        resolvers,
    }),
    context: ({ req }) => {
        return {
            userId: req.headers['user-id'],
        }
    },
})

server.start().then(() => {
    server.applyMiddleware({ app })
    httpServer.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    })
})
