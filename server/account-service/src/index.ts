import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";
import "graphql-import-node";

import resolvers from "./graphql/resolvers";
import { PORT } from "./config";

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
