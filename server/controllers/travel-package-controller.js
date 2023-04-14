import bookedPackageModel from "../models/booked-package.js";

export const createBookingPackage = async (req, res) => {
  try {
    console.log("body", req.body);
    const newBookedPackage = await new bookedPackageModel(req.body);
    const bookedPackage = await newBookedPackage.save();

    res.status(200).send({
      _id: bookedPackage._id,
      price: bookedPackage.p_price.base_price,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
