import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

import config from "../config";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "project", url: "http://localhost:4001/graphql" },
      { name: "account", url: "http://localhost:4002/graphql" },
    ],
  }),
});

const server = new ApolloServer({ gateway });

server.listen({ port: config.PORT }).then(({ url }) => {
  console.log(`🚀 server running at ${url}`);
});
