import api from "../../../lib/axios";
import { useQuery } from "react-query";

export const useFindTitleQuery = (title) => {
  return useQuery(
    ["findTitle", title],
    async ({ signal }) => {
        if (title) {
            const { data } = await api.get(`api/v1/groups/findByTitle?title=${title}`, {
                signal,
            });
            return data;
        }

    },
    { refetchOnMount: true }
  );
};