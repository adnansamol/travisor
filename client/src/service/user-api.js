import axios from "axios";

const base_url = "http://localhost:8000";

export const loginUser = async (data) => {
  try {
    console.log(base_url);
    const response = await axios.post(`${base_url}/user/login`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
