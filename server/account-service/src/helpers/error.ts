import { ApolloError } from "apollo-server-errors";

export class UserNotFoundError extends ApolloError {
  constructor(message?: string) {
    super(message, "USER_NOT_FOUND");

    Object.defineProperty(this, "name", { value: "UserNotFoundError" });
  }
}
