import { getAgencyProfileAPI } from "../service/agency-api";

export const authorizeAgency = async () => {
  const token = localStorage.getItem("admin-token");
  const agency = await getAgencyProfileAPI(token);
  if (agency) return true;
  return false;
};
