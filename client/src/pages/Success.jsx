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
        if (id) {
          await axios.post(
            "http://localhost:8000/travelPackage/confirmBooking/" + id,
            { userId: user._id, bookedPackage: travelPackage }
          );
          setLoading(false);
          localStorage.removeItem("id");
          localStorage.removeItem("travelPackage");
        } else {
          window.close();
        }
      } catch (error) {
        console.log(error);
      }
    };
    book();
  }, []);
  return loading ? (
    <>
      <Loading />
      <br />
      <h6 style={{ textAlign: "center", marginTop: 20 }}>
        We are processing your booking. Do not close the tab.
      </h6>
    </>
  ) : (
    <>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>
        Package Booked Successfully
      </h1>
      <h6 style={{ textAlign: "center", marginTop: 20 }}>
        You may close the tab now.
      </h6>
    </>
  );
};

export default Success;
