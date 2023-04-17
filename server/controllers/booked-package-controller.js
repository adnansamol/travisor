import bookedPackageModel from "../models/booked-package.js";

export const getBookedPackageById = async (req, res) => {
  try {
    const bookedPackage = await bookedPackageModel.findById(req.params.id);
    res.status(200).send(bookedPackage);
  } catch (error) {
    res.status(500).send(error);
  }
};
