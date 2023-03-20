import travelPackageModel from "../models/travel-package.js";
import open from "open";
export const createTravelPackage = async (req, res) => {
  try {
    const { _id } = await axios.get(`http://localhost:8000/getUserProfile`);
    const travelPackage = {
      b_travel_package_id: req.params.id,
      b_booked_user_id: _id.toString(),
      b_booking_status: "booked",
      b_booking_cost: 12500,
      b_booking_date: "05/06/2023",
    };
    const createdTravelPackage = new travelPackageModel(travelPackage);
    await createdTravelPackage.save();
    open("http://localhost:3000/success");
    res.status(200).send("Package created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
