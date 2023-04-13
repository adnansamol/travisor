import mongoose from "mongoose";
import { config } from "dotenv";

config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${username}:${password}@travisor.fivddqi.mongodb.net/TRAVISOR?retryWrites=true&w=majority`;

const Connection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log("Connection error in database: ", error);
  }
};
export default Connection;
