const base_url = "http://localhost:8000/travelPackage";
export const getAllTravelPackagesAPI = async () => {
  try {
    const response = await axios.get(`${base_url}/getAllPackages/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
