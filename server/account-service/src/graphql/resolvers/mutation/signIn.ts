import jwt from "jsonwebtoken";
import { MutationSignInArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { IUser } from "../../../interface";
import { JWT_SECRET_KEY } from "../../../config";
import { UserNotFoundError, hashPassword } from "../../../helpers";

export const signIn = async (
  _,
  { input: { username, password } }: MutationSignInArgs
) => {
  const hashedPassword = await hashPassword(password);

  const user: IUser = await UserModel.findOne({
    username,
    password: hashedPassword,
  });

  if (!user) {
    throw new UserNotFoundError();
  }

  if (user) {
    const token = jwt.sign(username, JWT_SECRET_KEY);
    return token;
  }
};
