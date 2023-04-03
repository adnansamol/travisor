import express from "express";
import cors from "cors";
import { config } from "dotenv";
import Connection from "./database/mongodb.js";
import userRouter from "./routes/user-route.js";
import packageRouter from "./routes/package-route.js";
import exceljs from "exceljs";
const app = express();
app.use(cors());
config();
const PORT = 8000;
app.use(express.json({ extended: true }));
app.use("/user", userRouter);
app.use("/travelPackage", packageRouter);

Connection();

app.listen(PORT, () => {
  try {
    console.log("Server connected to port: " + PORT);
  } catch (error) {
    console.log("Error connecting to server: ", error);
  }
});
