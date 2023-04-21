import travelPackageModel from "../models/travel-package.js";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";
import fs from "fs";
import { config } from "dotenv";
config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
export const createTravelPackage = async (req, res) => {
  try {
    const localPath = "./uploads/";
    const imagePreview = await cloudinary.v2.uploader
      .upload(localPath + req.files[0].filename)
      .then((result) => {
        fs.unlinkSync(localPath + req.files[i].filename);
        return result.url;
      });

    const images = [];
    for (let i = 1; i < req.files.length; i++) {
      await cloudinary.v2.uploader
        .upload(localPath + req.files[i].filename)
        .then((result) => {
          fs.unlinkSync(localPath + req.files[i].filename);
          images.push(result.url);
        });
    }
    const data = {
      p_agency_id: req.body.p_agency_id,
      p_name: req.body.p_name,
      p_start_location: "Ahmedabad",
      p_destination: req.body.p_destination,
      p_days: req.body.p_days,
      p_description: req.body.p_description,
      p_price: {
        base_price: req.body.p_price,
        discount: (req.body.p_price * 10) / 100,
      },
      p_start_date: req.body.p_start_date,
      p_imagePreview: imagePreview,
      p_images: images,

      p_days_plan: [],
      p_policies: {
        cancellation: {
          from: req.body.p_start_date,
          to: req.body.p_refund_date,
          description: req.body.p_refund_desc,
        },
      },
      p_flight: JSON.parse(req.body.p_flight),
      p_return_flight: JSON.parse(req.body.p_return_flight),
      p_transport: JSON.parse(req.body.p_transport),
      p_hotel: JSON.parse(req.body.p_hotel),
      p_keywords: req.body.p_keywords.split(","),
    };

    const travelPackage = await new travelPackageModel(data);
    await travelPackage.save();
    res.status(200).send("Package created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllTravelPackages = async (req, res) => {
  try {
    const travelPackages = await travelPackageModel.find({
      p_agency_id: req.params.agencyId,
    });
    res.status(200).send(travelPackages);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getTravelPackageById = async (req, res) => {
  try {
    const travelPackage = await travelPackageModel.findById(req.params.id);
    res.status(200).send(travelPackage);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteTravelPackageById = async (req, res) => {
  try {
    await travelPackageModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Package deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
