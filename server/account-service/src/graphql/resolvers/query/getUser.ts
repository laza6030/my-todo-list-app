import jwt from "jsonwebtoken";
import { QueryGetUserArgs } from "../../../generated/types";

import { JWT_SECRET_KEY } from "../../../config";

import UserModel from "../../../models/userModel";

export const getUser = async (_, { token }: QueryGetUserArgs) => {
  const username = jwt.verify(token, JWT_SECRET_KEY);

  const user = await UserModel.findOne({ username });

  if (!user) throw new Error("User not found");

  return user;
};
