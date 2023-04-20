import express from "express";
import {
  createCustomerRequest,
  getCustomerRequests,
} from "../controllers/customer-requests-controller.js";

const customerRequestRouter = express.Router();

customerRequestRouter.post("/createCustomerRequest", createCustomerRequest);
customerRequestRouter.get("/getCustomerRequests", getCustomerRequests);
export default customerRequestRouter;
