import express from "express";
import {
  bookTravelPackage,
  getBookingByPackageId,
  getBookingByUserId,
} from "../controllers/booking-controller.js";
import { makePayment } from "../controllers/payment-controller.js";
import { createTravelPackage } from "../controllers/travel-package-controller.js";

const packageRouter = express.Router();

packageRouter.post("/payment", makePayment);
packageRouter.post("/create", createTravelPackage);
packageRouter.post("/booking", bookTravelPackage);

packageRouter.get("/getBookingByUser/:id", getBookingByUserId);
packageRouter.get("/getBookingByPkg/:id", getBookingByPackageId);

export default packageRouter;
