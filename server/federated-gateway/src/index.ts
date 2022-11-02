import { ApolloServer } from "apollo-server";
import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";

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
      // willSendRequest({ request, context }) {
      //   request.http.headers.set("x-user-id", context["x-user-id"]);
      // },
    });
  },
});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    console.log(req.headers);
    return {
      "x-user-id": "Laza Nantenaina",
    };
  },
});

server.listen({ port: config.PORT }).then(({ url }) => {
  console.log(`🚀 server running at ${url}`);
});
