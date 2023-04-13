import bookedPackageModel from "../models/booked-package.js";

export const createBookingPackage = async (req, res) => {
  try {
    console.log("body", req.body);
    const bookedPackage = await new bookedPackageModel(req.body);
    const bookedPackageId = await bookedPackage.save();

    res.status(200).send(bookedPackageId._id);
  } catch (error) {
    res.status(500).send(error);
  }
};
