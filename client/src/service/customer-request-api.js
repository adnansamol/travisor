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
export const getPhoneNumberByIdAPI = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/agency/getPhoneNumber/${id}`
    );
    return response.data.phone;
  } catch (error) {
    console.log(error.message);
  }
};
