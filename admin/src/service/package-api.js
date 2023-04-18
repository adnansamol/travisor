import axios from "axios";

const base_url = "http://localhost:8000/travelPackage";
export const createNewTravelPackageAPI = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(`${base_url}/create`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
