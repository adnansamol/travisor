import bookedPackageModel from "../models/booked-package.js";

export const createBookingPackage = async (req, res) => {
  try {
    console.log(req.body);
    const bookedPackage = await new bookedPackageModel(req.body);
    const bookedPackageId = await bookedPackage.save()._id.toString();

    res.status(200).send(bookedPackageId);
  } catch (error) {
    res.status(500).send(error);
  }
};
