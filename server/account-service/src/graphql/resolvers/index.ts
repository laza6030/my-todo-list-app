import { getUser, me } from "./query";
import { signUp, signIn } from "./mutation";

export default {
  Query: { getUser, me },
  Mutation: { signUp, signIn },
};
