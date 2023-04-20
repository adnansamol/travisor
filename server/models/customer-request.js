import mongoose from "mongoose";

const customerRequest = mongoose.Schema({
  u_name: String,
  u_email: String,
  u_country: String,
  u_phone: String,
  u_message: String,
});

const customerRequestModel = mongoose.model(
  "customer_request",
  customerRequest
);
export default customerRequestModel;
