import bookingModel from "../models/booking.js";
import axios from "axios";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
  } catch (error) {
    res.status(500).send(error);
  }
};
export const confirmBooking = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    if (session.payment_status == "paid") {
      const response = await axios.post(
        "http://localhost:8000/travelPackage/bookedPackage",
        req.body.bookedPackage
      );
      const bookedPackageId = response.data._id;
      const bookedPackagePrice = response.data.price;
      const booking = {
        b_travel_package_id: bookedPackageId,
        b_booked_user_id: req.body.userId,
        b_booking_status: "booked",
        b_booking_date: new Date(),
        b_booking_cost: bookedPackagePrice,
      };

      const newBooking = await new bookingModel(booking);
      await newBooking.save();
      res.status(200).send("booking done successfull");
    } else {
      res.status(200);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const cancelBooking = async (req, res) => {
  try {
    const booking = await bookingModel.findOneAndUpdate(
      { b_travel_package_id: req.body.packageId },
      { b_booking_status: req.body.status }
    );
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error);
  }
};
