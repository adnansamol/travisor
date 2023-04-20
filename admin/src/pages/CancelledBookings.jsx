import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/loading/Loading";
import CancelledBookingTable from "../components/table/CancelledBookingTable";
import { getAgencyProfileAPI } from "../service/agency-api";
import { getCancelledBookingByAgencyIdAPI } from "../service/booking-api";

const Container = styled.div``;
const TableContainer = styled.div`
  width: 80%;
  margin: auto;
`;
const CancelledBookings = () => {
  const [cancelledBookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPackages();
  }, []);
  const getAllPackages = async () => {
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const response = await getCancelledBookingByAgencyIdAPI(_id);
    setBookings(response);
    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : cancelledBookings.length > 0 ? (
        <TableContainer>
          <h1>Cancelled Bookings</h1>
          <CancelledBookingTable cancelledBookings={cancelledBookings} />
        </TableContainer>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 20 }}>
          You currently don't have any cancelled bookings!
        </h2>
      )}
    </Container>
  );
};

export default CancelledBookings;
