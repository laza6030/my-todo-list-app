import axios from "axios";
import { MutationSignUpArgs } from "../../../generated/types";
import UserModel from "../../../models/userModel";
import { hashPassword } from "../../../helpers";

export const signUp = async (
  _,
  { input: { username, password } }: MutationSignUpArgs
) => {
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
    return await newUser.save();
  } catch (error) {
    console.log(error);
  }
};
