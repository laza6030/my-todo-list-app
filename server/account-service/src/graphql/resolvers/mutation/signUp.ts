import { MutationSignUpArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { hashPassword } from "../../../helpers";

export const signUp = async (
  _,
  { input: { username, password } }: MutationSignUpArgs
) => {
  try {
    const hashedPassword = await hashPassword(password);
    const user = new UserModel({ username, password: hashedPassword });
    return await user.save();
  } catch (error) {
    console.error(error);
  }
};
