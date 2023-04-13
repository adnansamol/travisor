import { getUserProfileAPI } from "../service/user-api";

export const authorizeUser = async () => {
  const token = localStorage.getItem("token");
  const user = await getUserProfileAPI(token);
  if (user) return true;
  return false;
};
