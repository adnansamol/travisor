import axios from "axios";

const base_url = "http://localhost:8000/travelPackage";
export const getRecentlyAddedTravelPackagesAPI = async (date) => {
  try {
    const response = await axios.post(
      `${base_url}/getRecentlyAddedTravelPackages/`,
      { date: date }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPackageRecommendationsAPI = async (id) => {
  try {
    const response = await axios.get(
      `${base_url}/getPackageRecommendations/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSpecialOfferPackagesAPI = async (discount) => {
  try {
    const response = await axios.get(
      `${base_url}/getSpecialOfferPackages/${discount}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTravelPackagesByDestinationAPI = async (destination) => {
  try {
    const response = await axios.get(
      `${base_url}/getTravelPackagesByDestination/${destination}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTravelPackageByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${base_url}/getTravelPackage/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
