import { useQuery } from "@apollo/client";
import { GET_TASKS_BY_COLUMN } from "../graphql/query";
import {
  GetTasksByColumn,
  GetTasksByColumnVariables,
} from "../graphql/__generated__/GetTasksByColumn";

export const useGetTasksByColumn = (columnId: string) => {
  const { data, loading, error } = useQuery<
    GetTasksByColumn,
    GetTasksByColumnVariables
  >(GET_TASKS_BY_COLUMN, { variables: { columnId } });

  return { data, loading, error };
};
