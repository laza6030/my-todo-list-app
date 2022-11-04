require("dotenv").config();
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { ApolloServer } from "apollo-server";
import "graphql-import-node";

import typeDefs from "../graphql/schema.graphql";
import resolvers from "../graphql/resolvers";

import UserModel from "../models/userModel";

import { hashPassword } from "../helpers";

const server = new ApolloServer({ typeDefs, resolvers });

describe("sign in", () => {
  it("should return a token", async () => {
    const mongod = await MongoMemoryServer.create();

    const uri = mongod.getUri();

    await mongoose.connect(uri, { dbName: "jest_test" });

    const hashedPassword = await hashPassword("roottoor");

    const user = new UserModel({
      username: "laza",
      password: hashedPassword,
    });

    await user.save();

    const result = await server.executeOperation({
      query: `mutation SignIn($input: UserInput!) {
          signIn(input: $input)
        }`,
      variables: { input: { username: "laza", password: "roottoor" } },
    });

    expect(result.data).toBeTruthy();

    await mongoose.disconnect();
  });
});
