import mongoose, { Schema } from "mongoose";

const travel_package = mongoose.Schema({
  p_guests: Array,
  p_name: String,
  p_start_location: String,
  p_destination: String,
  p_days: Number,
  p_description: String,
  p_price: Number,
  p_start_date: Date,
  p_end_date: Date,
  p_imagePreview: String,
  p_images: Array,
  p_rooms: Array,
  p_adults: Number,
  p_children: Number,
  p_transport: Schema.Types.Mixed,
  p_days_plan: Array,
  p_policies: Schema.Types.Mixed,
  p_flight: Schema.Types.Mixed,
  p_return_flight: Schema.Types.Mixed,
});

const travelPackageModel = mongoose.model("travel_package", travel_package);
export default travelPackageModel;
