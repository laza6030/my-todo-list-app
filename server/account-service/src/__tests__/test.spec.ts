require("dotenv").config();
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { ApolloServer } from "apollo-server";
import "graphql-import-node";
import jwt from "jsonwebtoken";

import typeDefs from "../graphql/schema.graphql";
import resolvers from "../graphql/resolvers";

import UserModel from "../models/userModel";

import { JWT_SECRET_KEY } from "../config";
import { hashPassword } from "../helpers";

import { SIGN_IN, SIGN_UP, GET_USER } from "./utils";

const server = new ApolloServer({ typeDefs, resolvers });

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
    });
    await user.save();

    // Test sign in with new user
    const result = await server.executeOperation({
      query: SIGN_IN,
      variables: { input: { username: "laza", password: "roottoor" } },
    });

    expect(result.data).toBeTruthy();
  });
});

// SIGN UP SECTION
describe("sign up", () => {
  it.only("should return the newly created user", async () => {
    const result = await server.executeOperation({
      query: SIGN_UP,
      variables: { input: { username: "lazatest", password: "roottoor" } },
    });

    expect(result.data.signUp.username).toEqual("error");
  });
});

describe("given a username that is already used", () => {
  it('shoud throw "user already exists" error', async () => {
    // Create a user
    const hashedPassword = await hashPassword("roottoor");
    const user = new UserModel({
      username: "laza",
      password: hashedPassword,
    });
    await user.save();

    const result = await server.executeOperation({
      query: SIGN_UP,
      variables: { input: { username: "laza", password: "roottoor" } },
    });

    expect(result.errors[0].message).toEqual("User already exists");
  });
});

// Get user from token
describe("given an access token", () => {
  it("should return the related user", async () => {
    // Create a user
    const hashedPassword = await hashPassword("roottoor");
    const user = new UserModel({
      _id: "41224d776a326fb40f000000",
      username: "laza1",
      password: hashedPassword,
    });
    await user.save();

    // generate token
    const token = jwt.sign("laza1", JWT_SECRET_KEY);

    const result = await server.executeOperation({
      query: GET_USER,
      variables: { token },
    });

    expect(result.data.getUser).toHaveProperty(
      "id",
      "41224d776a326fb40f000000"
    );
    expect(result.data.getUser).toHaveProperty("username", "laza1");
  });
});

describe("given a fake token", () => {
  it("should return 'user not found' error ", async () => {
    // generate token
    const token = jwt.sign("fake_user", JWT_SECRET_KEY);

    const result = await server.executeOperation({
      query: GET_USER,
      variables: { token },
    });

    expect(result.errors[0].message).toEqual("User not found");
  });
});
