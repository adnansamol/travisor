import axios from "axios";
const base_url = "http://localhost:8000";
export const bookPackageAPI = async (data) => {
  try {
    const response = await axios.post(
      base_url + "/travelPackage/booking",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const makePaymentAPI = async (data) => {
  try {
    const response = await axios.post(
      base_url + "/travelPackage/payment",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
