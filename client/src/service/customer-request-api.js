import axios from "axios";

const base_url = "http://localhost:8000/customer";
export const createCustomerRequestAPI = async (data) => {
  try {
    const response = await axios.post(
      `${base_url}/createCustomerRequest`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
