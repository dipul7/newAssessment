import { apiRequest } from "./utils";
import { useQuery } from "react-query";

const queryFunctions = () => {
  const url = "/api/v1/teams";
  return apiRequest({ url });
};
export const CallApi = () => {
  return useQuery("teams", queryFunctions);
};
