import axios from "axios";

const base_url = "http://localhost:8000/travelPackage";
export const getBookingByAgencyIdAPI = async (id) => {
  try {
    const response = await axios.get(`${base_url}/getBookingByAgency/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
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

export const getCancelledBookingByAgencyIdAPI = async (id) => {
  try {
    const response = await axios.get(
      `${base_url}/getCancelledBookingByAgency/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCustomerAPI = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/user/customer/" + id
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
