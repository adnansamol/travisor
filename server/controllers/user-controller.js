import userModel from "../models/user.js";
import { alreadyRegistered } from "../util/validation.js";
import { generateJWTToken, verifyJWTToken } from "../util/authentication.js";
export const registerUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(req);

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
    console.log(req.body);
    if (alreadyRegistered(req.body.email)) {
      const token = generateJWTToken({
        email: req.body.email,
        date: new Date(),
      });

      await userModel.findOneAndUpdate(
        {
          u_email: req.body.email,
          u_password: req.body.password,
        },
        { u_token: token }
      );
      res.status(200).send(token);
    } else {
      res.status(401).send("The user does not exist.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logoutUser = async (req, res) => {
  try {
    console.log(req.body);
    await userModel.updateOne({ u_email: req.body }, { u_token: null });
    res.status(200).send("User logged out successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
export const updateUser = async (req, res) => {
  try {
    await userModel.findOneAndUpdate({ u_email: req.body.u_email }, req.body);
    res.status(200).send("User updated successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (token) {
      const email = verifyJWTToken(token);
      if (email) {
        const data = await userModel.findOne({ u_email: email });
        data.u_token = undefined;
        res.status(200).send(data);
      } else {
        res.status(404).send(undefined);
      }
    } else {
      res.status(404).send(undefined);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const data = await userModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
