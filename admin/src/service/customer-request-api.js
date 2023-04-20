import axios from "axios";
const base_url = "http://localhost:8000/customer";
export const getCustomerRequestsAPI = async (id) => {
  try {
    const response = await axios.get(`${base_url}/getCustomerRequests/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
