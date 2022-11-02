import jwt from "jsonwebtoken";
import { MutationSignInArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { IUser } from "../../../interface";
import { JWT_SECRET_KEY } from "../../../config";
import {
  UserNotFoundError,
  WrongPasswordError,
  hashPassword,
} from "../../../helpers";

export const signIn = async (
  _,
  { input: { username, password } }: MutationSignInArgs
) => {
  const hashedPassword = await hashPassword(password);

  const user: IUser = await UserModel.findOne({
    username,
  });

  if (!user) {
    throw new UserNotFoundError();
  }

  if (user.password !== hashedPassword) {
    throw new WrongPasswordError();
  }

  if (user) {
    const token = jwt.sign(username, JWT_SECRET_KEY);
    return token;
  }
};
