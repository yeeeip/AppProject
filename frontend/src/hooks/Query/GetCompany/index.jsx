import api from "../../../lib/axios";
import { useQuery } from "react-query";

export const useGroupsQuery = () => {
  return useQuery(
    ["groups"],
    async ({ signal }) => {
      const { data } = await api.get("/api/v1/groups", {
        signal,
      });

      return data;
    },
    { refetchOnMount: true }
  );
};