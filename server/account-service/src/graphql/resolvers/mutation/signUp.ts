import { MutationSignUpArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";

export const signUp = async (
  _,
  { input: { username, password } }: MutationSignUpArgs
) => {
  try {
    const user = new UserModel({ username, password });
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};
