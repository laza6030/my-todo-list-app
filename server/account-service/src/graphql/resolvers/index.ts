import { me } from "./query";
import { signUp, signIn } from "./mutation";

export default {
  Query: { me },
  Mutation: { signUp, signIn },
};
