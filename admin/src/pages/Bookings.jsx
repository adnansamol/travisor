import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/loading/Loading";
import BookingTable from "../components/table/BookingTable";
import { getAgencyProfileAPI } from "../service/agency-api";
import { getBookingByAgencyIdAPI } from "../service/booking-api";

const Container = styled.div``;
const TableContainer = styled.div`
  width: 80%;
  margin: auto;
`;
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPackages();
  }, []);
  const getAllPackages = async () => {
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const response = await getBookingByAgencyIdAPI(_id);
    setBookings(response);
    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : bookings.length > 0 ? (
        <TableContainer>
          <h1>Active Bookings</h1>
          <BookingTable bookings={bookings} />
        </TableContainer>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 20 }}>
          You currently don't have any bookings!
        </h2>
      )}
    </Container>
  );
};

export default Bookings;
