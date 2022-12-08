export interface IUser {
  id: string;
  username: string;
  password: string;
  defaultWorkspaceId: string;
}

export interface IContext {
  userId: string;
}
