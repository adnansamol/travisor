import mongoose, { Schema } from "mongoose";

const user = mongoose.Schema({
  u_name: String,
  u_email: String,
  u_password: String,
  u_gender: String,
  u_dateOfBirth: Date,
  u_country: String,
  u_phone: String,
  u_token: String,
  u_travisor_history: Schema.Types.Mixed,
});

const userModel = mongoose.model("user", user);
export default userModel;
