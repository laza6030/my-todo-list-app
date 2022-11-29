import jwt from "jsonwebtoken";
import { QueryGetUserArgs } from "../../../generated/types";

import { JWT_SECRET_KEY } from "../../../config";

import UserModel from "../../../models/userModel";

export const getUser = async (_, { token }: QueryGetUserArgs) => {
  const userId = jwt.verify(token, JWT_SECRET_KEY);

  const user = await UserModel.findOne({ id: userId });

  if (!user) throw new Error("User not found");

  return user;
};
