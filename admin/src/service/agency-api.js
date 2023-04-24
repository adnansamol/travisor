import axios from "axios";

const base_url = "http://localhost:8000/agency";

export const loginAgencyAPI = async (data) => {
  try {
    const response = await axios.post(`${base_url}/login`, data);
    localStorage.setItem("admin-token", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const registerAgencyAPI = async (data) => {
  try {
    const response = await axios.post(`${base_url}/register`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAgencyProfileAPI = async (token) => {
  try {
    const response = await axios.get(`${base_url}/profile`, {
      headers: { "admin-token": token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateAgencyAPI = async (data) => {
  try {
    const response = await axios.put(`${base_url}/profile/update`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const logoutAgencyAPI = () => {
  try {
  } catch (error) {}
};
