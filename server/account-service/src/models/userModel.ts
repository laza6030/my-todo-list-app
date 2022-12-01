import { Schema, model } from "mongoose";
import { IUser } from "../interface";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  defaultWorkspaceId: {
    type: String,
  },
});

const userModel = model<IUser>("user", userSchema);

export default userModel;
