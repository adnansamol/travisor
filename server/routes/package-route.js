import express from "express";
import { getBookedPackageById } from "../controllers/booked-package-controller.js";
import {
  bookTravelPackage,
  cancelBooking,
  confirmBooking,
  getBookingByPackageId,
  getBookingByUserId,
} from "../controllers/booking-controller.js";
import { makePayment } from "../controllers/payment-controller.js";
import { createBookingPackage } from "../controllers/travel-package-controller.js";

const packageRouter = express.Router();

packageRouter.get("/get/:id", getBookedPackageById);

packageRouter.post("/payment", makePayment);
packageRouter.post("/confirmBooking/:id", confirmBooking);

packageRouter.post("/bookedPackage", createBookingPackage);
packageRouter.post("/booking", bookTravelPackage);

packageRouter.post("/cancelBooking", cancelBooking);

packageRouter.get("/getBookingByUser/:id", getBookingByUserId);
packageRouter.get("/getBookingByPkg/:id", getBookingByPackageId);

export default packageRouter;
