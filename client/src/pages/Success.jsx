import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { PackageContext } from "../context/package-context";

const Success = () => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  useEffect(() => {
    const book = async () => {
      try {
        const booking = {};
        const id = localStorage.getItem("id");
        const bookedPackageId = await axios.post(
          "http://localhost:8000/travelPackage/bookedPackage",
          travelPackage
        );
        await axios.post(
          "http://localhost:8000/travelPackage/confirmBooking/" + id
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
