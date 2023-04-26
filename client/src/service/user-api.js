import axios from "axios";

const base_url = "http://localhost:8000";

export const loginUserAPI = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/login`, data);
    localStorage.setItem("token", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
export const logoutUserAPI = async (data) => {
  try {
    const response = await axios.put(`${base_url}/user/logout`, {
      u_email: data,
    });
    console.log("logout", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const registerUserAPI = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/register`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserProfileAPI = async (token) => {
  try {
    const response = await axios.get(`${base_url}/user/profile`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.data;
  }
};
export const updateUserAPI = async (data) => {
  try {
    const response = await axios.put(`${base_url}/user/profile/update`, data);
    console.log("data: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
