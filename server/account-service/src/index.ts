import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";
import "graphql-import-node";
require("dotenv").config();

import { connect, connection } from "mongoose";

import resolvers from "./graphql/resolvers";
import { PORT, MONGODB_URI } from "./config";

connect(MONGODB_URI);

connection.on("error", () => console.log("error"));

connection.once("open", () => console.log("connected to the database"));

const typeDefs = require("./graphql/schema.graphql");

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers,
  }),
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 server running at ${url}`);
});
