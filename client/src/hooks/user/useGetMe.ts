import { useQuery } from "@apollo/client";

import { GET_ME } from "../../graphql/query";
import { Me } from "../../graphql/__generated__/Me";

export const useGetMe = () => {
  const { data } = useQuery<Me>(GET_ME);

  return data?.me;
};
