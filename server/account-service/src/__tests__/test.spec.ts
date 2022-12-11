import { buildSubgraphSchema } from "@apollo/subgraph";
require("dotenv").config();
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { ApolloServer } from "apollo-server";
import "graphql-import-node";

import typeDefs from "../graphql/schema.graphql";
import resolvers from "../graphql/resolvers";

import UserModel from "../models/userModel";

import { hashPassword } from "../helpers";

import { SIGN_IN, SIGN_UP } from "./utils";

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

beforeAll(async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri, { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("sign in", () => {
  it("should return a token", async () => {
    // Create a user
    const hashedPassword = await hashPassword("roottoor");
    const user = new UserModel({
      username: "laza",
      password: hashedPassword,
      defaultWorkspaceId: "41224d776a326fb40f000000",
    });
    await user.save();

    // Test sign in with new user
    const result = await server.executeOperation({
      query: SIGN_IN,
      variables: { input: { username: "laza", password: "roottoor" } },
    });

    expect(result.data.signIn.token).toBeTruthy();
  });
});

// SIGN UP SECTION
// describe("sign up", () => {
//   it("should return the newly created user", async () => {
//     const result = await server.executeOperation({
//       query: SIGN_UP,
//       variables: { input: { username: "lazatest", password: "roottoor" } },
//     });

//     expect(result.data.signUp.username).toEqual("lazatest");
//   });
// });

// describe("given a username that is already used", () => {
//   it('shoud throw "user already exists" error', async () => {
//     // Create a user
//     const hashedPassword = await hashPassword("roottoor");
//     const user = new UserModel({
//       username: "laza",
//       password: hashedPassword,
//     });
//     await user.save();

//     const result = await server.executeOperation({
//       query: SIGN_UP,
//       variables: { input: { username: "laza", password: "roottoor" } },
//     });

//     expect(result.errors[0].message).toEqual("User already exists");
//   });
// });
