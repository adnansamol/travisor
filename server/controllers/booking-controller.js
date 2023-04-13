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
      console.log(req.body);
      const bookedPackageId = await axios.post(
        "http://localhost:8000/travelPackage/bookedPackage",
        req.body.travelPackage
      );
      console.log(bookedPackageId);
      // const booking = new bookingModel(req.body.booking);
      // booking.save();
      res.status(200).send("booking done successfull");
    } else {
      res.status(200);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
