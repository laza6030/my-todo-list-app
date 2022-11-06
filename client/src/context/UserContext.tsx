import { createContext } from "react";

import { GetUser_getUser } from "../graphql/__generated__/GetUser";

import { useGetUser } from "../hooks";

export const UserContext = createContext<Omit<GetUser_getUser, "__typename">>({
  id: "",
  username: "",
});

interface IProps {
  children: JSX.Element;
}

export const UserProvider = (props: IProps) => {
  const { children } = props;
  const token = localStorage.getItem("token");
  const { user } = useGetUser(token ?? "");

  return (
    <UserContext.Provider
      value={{ id: user?.id ?? "", username: user?.username ?? "" }}
    >
      {children}
    </UserContext.Provider>
  );
};
