import userModel from "../models/user.js";
import { alreadyRegistered } from "../util/validation.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const user = req.body;
    if (await alreadyRegistered(user.u_email)) {
      return res.send("User already registered");
    }
    const newUser = await new userModel(user);
    newUser.save();
    res.status(200).send("User registered successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    if (alreadyRegistered(req.body.email)) {
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
