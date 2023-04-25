import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/ui/Button";
import { colors } from "../constant/colors";
import {
  cancelBookingAPI,
  getBookedPackageByIdAPI,
} from "../service/booking-api";

const CancelButton = styled(Button)`
  background-color: ${colors.crimson};
  color: white;
`;
const BookingDetailView = () => {
  const [bookedPackage, setBookedPackage] = useState();
  //   const fetchBookingDetails = async () => {
  //     const response = await getBooking(params.id);
  //     if (response) {
  //       setBookedPackage(response);
  //     }
  //   };
  const cancelBooking = async () => {
    if (window.confirm("Are you sure you want to cancel the booking?")) {
      const response = await cancelBookingAPI(params.id);
      alert(response);
    }
  };
  const params = useParams();
  return (
    <div>
      {params.id}

      <CancelButton onClick={cancelBooking}>Cancel Booking</CancelButton>
    </div>
  );
};

export default BookingDetailView;
