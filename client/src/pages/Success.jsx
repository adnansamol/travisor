import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  // const params = useParams();
  // useEffect(() => {
  //   const book = async () => {
  //     await bookPackage({
  //       b_travel_package_id: params.id,
  //       b_booked_user_id: "640f346c9d970c0a06daef0a",
  //       b_booking_status: "booked",
  //       b_booking_date: "05/06/2023",
  //       b_booking_cost: 11000,
  //     });
  //   };
  //   book();
  // }, []);
  return <h1>Package booked!</h1>;
};

export default Success;
