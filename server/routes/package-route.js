import express from "express";
import { getBookedPackageById } from "../controllers/booked-package-controller.js";
import {
  cancelBooking,
  confirmBooking,
  getBookingByAgencyId,
  getBookingByPackageId,
  getBookingByUserId,
  getCancelledBookingByAgencyId,
} from "../controllers/booking-controller.js";
import { makePayment } from "../controllers/payment-controller.js";
import { createBookingPackage } from "../controllers/booked-package-controller.js";
import {
  createTravelPackage,
  deleteTravelPackageById,
  getAllTravelPackages,
  getTravelPackageById,
} from "../controllers/travel-package-controller.js";
import multer from "multer";
const packageRouter = express.Router();
const upload = multer();
packageRouter.post("/create", upload.any(), createTravelPackage);

packageRouter.post("/payment", makePayment);
packageRouter.post("/confirmBooking/:id", confirmBooking);

packageRouter.post("/createBookedPackage", createBookingPackage);

packageRouter.put("/cancelBooking", cancelBooking);

packageRouter.get("/getBookingByAgency/:id", getBookingByAgencyId);
packageRouter.get(
  "/getCancelledBookingByAgency/:id",
  getCancelledBookingByAgencyId
);
packageRouter.get("/getBookingByUser/:id", getBookingByUserId);
packageRouter.get("/getBookingByPkg/:id", getBookingByPackageId);
packageRouter.get("/getBookedPackage/:id", getBookedPackageById);

packageRouter.get("/getAllPackages/:agencyId", getAllTravelPackages);
packageRouter.get("/getPackage/:id", getTravelPackageById);

packageRouter.delete("/deletePackage/:id", deleteTravelPackageById);

export default packageRouter;
