import jwt from "jsonwebtoken";

export const getUserId = (token: string) => {
  return jwt.decode(token)?.toString();
};
