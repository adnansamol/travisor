import travelPackageModel from "../models/travel-package.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const createTravelPackage = async (req, res) => {
  try {
    console.log(req.body);
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
      p_imagePreview:
        "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      p_images: [
        "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7744992/pexels-photo-7744992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      p_transport: req.body.p_transport,
      p_days_plan: [],
      p_policies: {
        cancellation: {
          from: req.body.p_start_date,
          to: req.body.p_refund_date,
          description: req.body.p_refund_desc,
        },
      },
      p_flight: req.body.p_flight,
      p_return_flight: req.body.p_return_flight,
      p_hotel: req.body.p_hotel,
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
