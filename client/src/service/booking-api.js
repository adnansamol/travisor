import axios from "axios";
import { getUserProfileAPI } from "./user-api";
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
    const response = await axios.get(base_url + "/getBookingByUser/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBookingByPackageIdAPI = async (id) => {
  try {
    const response = await axios.get(base_url + "/getBookingByPkg/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const cancelBookingAPI = async (id) => {
  try {
    if (getUserProfileAPI(localStorage.getItem("token"))) {
      const response = await axios.put(base_url + "/cancelBooking/" + id);
      return response.data;
    } else {
      alert("Please login to continue");
    }
  } catch (error) {
    console.log("error");
  }
};

export const getBookedPackageByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${base_url}/getBookedPackage/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTravelHistoryByUserIdAPI = async (id) => {
  try {
    const response = await axios.get(`${base_url}/getTravelHistory/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
