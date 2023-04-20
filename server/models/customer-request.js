import mongoose from "mongoose";

const customerRequest = mongoose.Schema({
  c_ageny_id: String,
  c_name: String,
  c_email: String,
  c_country: String,
  c_phone: String,
  c_message: String,
});

const customerRequestModel = mongoose.model(
  "customer_request",
  customerRequest
);
export default customerRequestModel;
