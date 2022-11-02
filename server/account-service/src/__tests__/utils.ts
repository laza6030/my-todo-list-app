import fs from "fs";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { gql } from "apollo-server";
import path from "path";

import resolvers from "../graphql/resolvers";

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "../graphql/schema.graphql"), "utf8")
);

// export const schema = buildSubgraphSchema({})
