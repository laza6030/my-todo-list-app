import { getUser } from "./query";
import { signUp, signIn } from "./mutation";

export default {
  Query: { getUser },
  Mutation: { signUp, signIn },
};
