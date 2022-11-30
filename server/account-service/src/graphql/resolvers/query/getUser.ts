import jwt from "jsonwebtoken";
import { QueryGetUserArgs } from "../../../generated/types";

import UserModel from "../../../models/userModel";

export const getUser = async (_, { token }: QueryGetUserArgs) => {
  const userId = jwt.decode(token);
  const user = await UserModel.findOne({ _id: userId });

  if (!user) throw new Error("User not found");

  return user;
};
