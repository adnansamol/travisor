import axios from "axios";

const base_url = process.env.SERVER_URL;

export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${base_url}/login`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
