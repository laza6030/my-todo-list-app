import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { MutationSignInArgs, SignUp } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { IUser } from "../../../interface";
import { JWT_SECRET_KEY } from "../../../config";
import { UserNotFoundError, WrongPasswordError } from "../../../helpers";

export const signIn = async (
  _,
  { input: { username, password } }: MutationSignInArgs
): Promise<SignUp> => {
  const user: IUser = await UserModel.findOne({
    username,
  });

  if (!user) {
    throw new UserNotFoundError();
  }

  // Check password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new WrongPasswordError();
  }

  if (user) {
    const token = jwt.sign(user.id, JWT_SECRET_KEY);
    return {
      token,
      defaultWorkspaceId: user.defaultWorkspaceId
    };
  }
};
