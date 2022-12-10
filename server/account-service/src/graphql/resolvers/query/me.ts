import userModel from "../../../models/userModel";

import { IContext } from "../../../interface";

import { User } from "../../../generated/types";

export const me = async (_: any, __: any, ctx: IContext): Promise<User> => {
  const user = await userModel.findOne({ id: ctx.userId });

  return user;
};
