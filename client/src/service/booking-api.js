import axios from "axios";
export const bookPackageAPI = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/travelPackage/booking",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
