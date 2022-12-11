import { createContext } from "react";

import { Me_me } from "../graphql/__generated__/Me";
import { useGetMe } from "../hooks";

export const UserContext = createContext<Omit<Me_me, "__typename">>({
  id: "",
  username: "",
  defaultWorkspaceId: "",
});

interface IProps {
  children: JSX.Element;
}

export const UserProvider = (props: IProps) => {
  const { children } = props;

  const { user } = useGetMe();

  return (
    <UserContext.Provider
      value={{
        id: user?.id ?? "",
        username: user?.username ?? "",
        defaultWorkspaceId: user?.defaultWorkspaceId ?? "",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
