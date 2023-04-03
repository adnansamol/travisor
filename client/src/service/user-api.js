import axios from "axios";

const base_url = "http://localhost:8000";

export const loginUserAPI = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/login`, data);

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
      headers: { "auth-token": token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
