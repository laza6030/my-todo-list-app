import axios from "axios";
import jwt from "jsonwebtoken";
import { MutationSignUpArgs, SignUp } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { hashPassword } from "../../../helpers";
import { JWT_SECRET_KEY } from "../../../config";

export const signUp = async (
  _,
  { input: { username, password } }: MutationSignUpArgs
): Promise<SignUp> => {
  try {
    const user = await UserModel.find({ username });

    if (user.length) throw new Error("User already exists");

    const hashedPassword = await hashPassword(password);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
      defaultWorkspaceId: "",
    });

    const createdUser = await newUser.save();

    const { data } = await axios.post(
      "http://project_service:4001/createWorkspace",
      {
        name: "default workspace",
        userId: createdUser.id,
      }
    );

    newUser.defaultWorkspaceId = data.workspaceId;
    await newUser.save();

    const token = jwt.sign(createdUser.id, JWT_SECRET_KEY);

    return { token, defaultWorkspaceId: data.workspaceId };
  } catch (error) {
    console.log(error);
  }
};
