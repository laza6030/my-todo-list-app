import jwt from "jsonwebtoken";
import { MutationSignInArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { IUser } from "../../../interface";

import { JWT_SECRET_KEY } from "../../../config";

export const signIn = async (
  _,
  { input: { username, password } }: MutationSignInArgs
) => {
  try {
    const user: IUser = await UserModel.findOne({ username, password });

    if (user) {
      const token = jwt.sign(username, JWT_SECRET_KEY);
      return token;
    }
  } catch (error) {
    console.error(error);
  }
};
