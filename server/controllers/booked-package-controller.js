import bookedPackageModel from "../models/booked-package.js";

export const getBookedPackageById = async (req, res) => {
  try {
    const bookedPackage = await bookedPackageModel.findById(req.params.id);
    res.status(200).send(bookedPackage);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createBookingPackage = async (req, res) => {
  try {
    console.log("in creatbook", req.body);
    req.body._id = undefined;
    const newBookedPackage = await new bookedPackageModel(req.body);
    const bookedPackage = await newBookedPackage.save();
    console.log("booked package: ", bookedPackage);
    res.status(200).send({
      _id: bookedPackage._id,
      price: bookedPackage.p_price.base_price,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
