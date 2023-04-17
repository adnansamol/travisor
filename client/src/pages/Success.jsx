import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PackageContext } from "../context/package-context";
import { getUserProfileAPI } from "../service/user-api";
import Loading from "../components/ui/Loading";
const Success = () => {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    book();
  }, []);
  return loading ? <Loading /> : <h1>Package Booked Successfully</h1>;
};

export default Success;
