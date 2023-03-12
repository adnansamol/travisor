import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import { config } from "dotenv";
import Connection from "./database/mongodb.js";
const app = express();
app.use(cors());
config();
const PORT = 8000;
app.use(express.json({ extended: true }));
app.use("/", router);

Connection();
app.listen(PORT, () => {
  try {
    console.log("Server connected to port: " + PORT);
  } catch (error) {
    console.log("Error connecting to server: ", error);
  }
});
