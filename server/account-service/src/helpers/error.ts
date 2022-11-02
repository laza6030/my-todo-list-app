import { ApolloError } from "apollo-server-errors";

export class UserNotFoundError extends ApolloError {
  constructor(message?: string) {
    super(message, "USER_NOT_FOUND");

    Object.defineProperty(this, "name", { value: "UserNotFoundError" });
  }
}

export class WrongPasswordError extends ApolloError {
  constructor(message?: string) {
    super(message, "WRONG_PASSWORD");

    Object.defineProperty(this, "name", { value: "WrongPasswordError" });
  }
}
