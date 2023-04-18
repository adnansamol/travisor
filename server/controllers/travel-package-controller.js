import travelPackageModel from "../models/travel-package.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const createTravelPackage = async (req, res) => {
  try {
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
      p_start_date: new Date(),
      p_end_date: new Date(),
      p_imagePreview:
        "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      p_images: [
        "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7744992/pexels-photo-7744992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      p_rooms: [],
      p_adults: 2,
      p_children: 0,
      p_transport: {
        vehicle: "Sedan",
        type: "Private",
        fuel_type: "EV",
        seat: 4,
        description: "Pickup from airport",
        price: 1000,
      },
      p_days_plan: [],
      p_policies: {
        cancellation: {
          from: new Date(),
          to: req.body.p_refund_date,
          description: req.body.p_refund_desc,
        },
      },
      p_flight: {
        stops: [
          {
            departure: new Date(),
            arrival: new Date(),
            class: "Economy",
            from: "Ahmedabad",
            to: "New Delhi",
            plane: "MK-745",
            time: "03h30m",
          },
          {
            departure: new Date(),
            arrival: new Date(),
            class: "Economy",
            from: "New Delhi",
            to: req.body.p_destination,
            plane: "MK-745",
            time: "04h30m",
          },
        ],
        price: 10000,
      },
      p_return_flight: null,
      p_hotel: {
        name: "Club Med La Plantation d'Albion",
        address:
          "Avenue du Club Med, Albion, MauritiusAvenue du Club Med, Albion, Mauritius",
        rating: 4,
        facilities: [
          "Free parking",
          "Free High Speed Internet (WiFi)",
          "Fitness Centre with Gym / Workout Room",
          "Free breakfast",
          "Beach",
          "Bar / lounge",
          "Boating",
          "Walking tours",
          "Babysitting",
        ],
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d4/79/4f/club-med-la-plantation.jpg?w=1000&h=-1&s=1",
        ],
        room_types: ["Ocean view", "Bridal suite", "Suites", "Family rooms"],
        price_per_room: 2700,
        dineIncluded: true,
        location: "Mauritius",
      },
    };
    const travelPackage = await new travelPackageModel(data);
    console.log(await travelPackage.save());
    res.status(200).send("Package created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllTravelPackages = async (req, res) => {
  try {
    const travelPackages = await travelPackageModel.find({
      p_agency_id: req.body.id,
    });
    res.status(200).send(travelPackages);
  } catch (error) {
    res.status(500).send(error);
  }
};
