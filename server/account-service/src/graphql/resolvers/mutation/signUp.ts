import { MutationSignUpArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";

export const signUp = async (
  _,
  { input: { name, password } }: MutationSignUpArgs
) => {
  try {
    const user = new UserModel({ name, password });
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};
