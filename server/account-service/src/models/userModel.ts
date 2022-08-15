import { Schema, model } from "mongoose";
import { IUser } from "../interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const userModel = model<IUser>("user", userSchema);

export default userModel;
