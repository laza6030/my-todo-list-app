// https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e
// https://medium.com/javascript-in-plain-english/jest-mock-for-unit-testing-mern-backend-983c1e3fef83

import { ApolloServer } from "apollo-server";
import { createTestClient } from "apollo-server-testing";

import { connect, clearDatabase, closeDatabase } from "./db";
import { signUp } from "../graphql/resolvers/mutation";

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

const server = new ApolloServer({});

describe("create a user", () => {
  it("should create a user", async () => {
    // const user = await signUp(, )
  });
});
