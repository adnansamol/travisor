import express from "express";
import { getBookedPackageById } from "../controllers/booked-package-controller.js";
import {
  bookTravelPackage,
  cancelBooking,
  confirmBooking,
  getBookingByAgencyId,
  getBookingByPackageId,
  getBookingByUserId,
} from "../controllers/booking-controller.js";
import { makePayment } from "../controllers/payment-controller.js";
import { createBookingPackage } from "../controllers/booked-package-controller.js";
import {
  createTravelPackage,
  getAllTravelPackages,
  getTravelPackageById,
} from "../controllers/travel-package-controller.js";

const packageRouter = express.Router();

packageRouter.post("/create", createTravelPackage);

packageRouter.post("/payment", makePayment);
packageRouter.post("/confirmBooking/:id", confirmBooking);

packageRouter.post("/bookedPackage", createBookingPackage);
packageRouter.post("/booking", bookTravelPackage);

packageRouter.post("/cancelBooking", cancelBooking);

packageRouter.get("/getBookingByAgency/:id", getBookingByAgencyId);
packageRouter.get("/getBookingByUser/:id", getBookingByUserId);
packageRouter.get("/getBookingByPkg/:id", getBookingByPackageId);
packageRouter.get("/get/:id", getBookedPackageById);

packageRouter.get("/getAllPackages/:agencyId", getAllTravelPackages);
packageRouter.get("/getPackage/:id", getTravelPackageById);
export default packageRouter;
