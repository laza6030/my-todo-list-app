import { ApolloServer } from "apollo-server";
import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";

import { getUserId } from "../helpers";

import config from "../config";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "account", url: "http://account_service:4002/graphql" },
      { name: "project", url: "http://project_service:4001/graphql" },
    ],
  }),
  buildService({ url }) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        request.http.headers.set("user-id", getUserId(context.token));
      },
    });
  },
});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    return {
      token: req.headers["authorization"],
    };
  },
});

server.listen({ port: config.PORT }).then(({ url }) => {
  console.log(`🚀 server running at ${url}`);
});
