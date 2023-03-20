import bookingModel from "../models/booking.js";
import open from "open";
export const getBookingByUserId = async (req, res) => {
  try {
    const data = await bookingModel.find({ b_booked_user_id: req.params.id });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getBookingByPackageId = async (req, res) => {
  try {
    const data = await bookingModel.find({
      b_travel_package_id: req.params.id,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const bookTravelPackage = async (req, res) => {
  try {
    const booking = new bookingModel(req.body);
    booking.save();
    res.status(200).send("booking done successfull");
  } catch (error) {
    res.status(500).send(error);
  }
};
