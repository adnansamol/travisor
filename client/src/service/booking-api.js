import axios from "axios";
export const bookPackage = async (data) => {
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
