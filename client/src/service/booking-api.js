import axios from "axios";
const base_url = "http://localhost:8000/travelPackage";
export const bookPackageAPI = async (data) => {
  try {
    const response = await axios.post(base_url + "/booking", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const makePaymentAPI = async (data) => {
  try {
    const response = await axios.post(base_url + "/payment", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBookingByUserIdAPI = async (id) => {
  try {
    console.log("in service api", id);
    const response = await axios.get(base_url + "/getBookingByUser/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
