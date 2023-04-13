import travelPackageModel from "../models/travel-package.js";
import open from "open";
export const createBookingPackage = async (req, res) => {
  try {
    const bookedPackage = await new travelPackageModel(req.body);
    bookedPackage.save();
    res.status(200).send("Package created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
