import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

import config from "../config";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "account", url: "http://account_service:4002/graphql" },
      { name: "project", url: "http://project_service:4001/graphql" },
    ],
  }),
});

const server = new ApolloServer({ gateway });

server.listen({ port: config.PORT }).then(({ url }) => {
  console.log(`🚀 server running at ${url}`);
});
