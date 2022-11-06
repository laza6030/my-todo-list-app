import { MutationSignUpArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { hashPassword } from "../../../helpers";

export const signUp = async (
  _,
  { input: { username, password } }: MutationSignUpArgs
) => {
  const user = await UserModel.find({ username });

  if (user.length) throw new Error("User already exists");

  const hashedPassword = await hashPassword(password);
  const newUser = new UserModel({ username, password: hashedPassword });
  return await newUser.save();
};
