import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { PackageContext } from "../context/package-context";
import { getUserProfileAPI } from "../service/user-api";

const Success = () => {
  useEffect(() => {
    const book = async () => {
      try {
        const id = localStorage.getItem("id");
        const user = await getUserProfileAPI(localStorage.getItem("token"));
        const travelPackage = JSON.parse(localStorage.getItem("travelPackage"));
        await axios.post(
          "http://localhost:8000/travelPackage/confirmBooking/" + id,
          { userId: user._id, bookedPackage: travelPackage }
        );
      } catch (error) {
        console.log(error);
      }
    };
    book();
  }, []);
  return <h1>Package booked!</h1>;
};

export default Success;
