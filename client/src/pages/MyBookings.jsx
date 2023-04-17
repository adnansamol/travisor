import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import { colors } from "../constant/colors";
import {
  getBookedPackageByIdAPI,
  getBookingByUserIdAPI,
} from "../service/booking-api";
import { getUserProfileAPI } from "../service/user-api";
import { addDays } from "../util/date-functions";
import { getShortDate, priceFormatter } from "../util/formatter";
import Modal from "react-modal";
import BookedPackageDetails from "../components/travel_package/BookedPackageDetails";
import { useRef } from "react";

const Container = styled.div`
  width: 40%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: auto;
  padding: 15px 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: ${colors.black};
`;
const BookingsContainer = styled.div`
  overflow-y: auto;
  height: 250px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 10px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.teal400};
    border-radius: 5px;
  }
`;
const SingleBooking = styled.div`
  background-color: ${colors.teal100};
  border: 1px solid ${colors.teal400};
  border-radius: 5px;
  padding: 10px 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PackageName = styled.div`
  color: ${colors.black};
  font-size: 24px;
  font-weight: 500;
`;
const PackageDate = styled.div``;
const PackageDays = styled.div`
  width: fit-content;
  padding: 2px 10px;
  color: white;
  font-weight: 500;
  font-size: 12px;
  background-color: ${colors.black};
`;
const BookingDate = styled.div`
  color: ${colors.gray};
`;
const TotalCost = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.black};
`;
const ManageButton = styled(Button)`
  font-size: 16px;
  padding: 8px 15px;
  background-color: ${colors.dodgerblue};
  color: white;
`;

const customModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "8rem",
    width: "60%",
    left: "20%",
    height: "29rem",
  },
};
const DetailsContainer = styled.div``;
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const packageId = useRef();
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { _id } = await getUserProfileAPI(localStorage.getItem("token"));
    const bookings = await getBookingByUserIdAPI(_id);
    bookings.forEach(async (booking) => {
      if (booking.b_travel_package_id && booking.b_booking_date) {
        const bookedPackage = await getBookedPackageByIdAPI(
          booking.b_travel_package_id
        );
        console.log(bookedPackage, booking);
        bookedPackage &&
          setBookings((old) => [
            ...old,
            {
              packageName: bookedPackage.p_name,
              packageDate: bookedPackage.p_start_date,
              packageDays: bookedPackage.p_days,
              totalCost: booking.b_booking_cost,
              bookingDate: booking.b_booking_date,
              bookingStatus: booking.b_booking_status,
            },
          ]);
      }
    });
    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = (id) => {
    packageId.current = id;
    setIsOpen(true);
  };
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={customModalStyles}
      >
        <BookedPackageDetails id={packageId.current} />
      </Modal>
      <Title>Bookings</Title>
      <hr />
      {loading ? (
        <Loading />
      ) : (
        <BookingsContainer>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <SingleBooking>
                <div>
                  <PackageName>{booking.packageName}</PackageName>
                  <PackageDays>
                    {booking.packageDays}/{booking.packageDays + 1}
                  </PackageDays>
                  <PackageDate>
                    {getShortDate(booking.packageDate) +
                      "-" +
                      getShortDate(
                        addDays(booking.packageDate, booking.packageDays)
                      )}
                  </PackageDate>

                  <TotalCost>
                    {priceFormatter.format(booking.totalCost)}
                  </TotalCost>
                  <BookingDate>
                    Booked At: {getShortDate(booking.bookingDate)}
                  </BookingDate>
                </div>
                <div>
                  <ManageButton
                    onClick={() => openModal(booking.b_travel_package_id)}
                  >
                    Manage
                  </ManageButton>
                </div>
              </SingleBooking>
            ))
          ) : (
            <h3>You currently don't have any booking</h3>
          )}
        </BookingsContainer>
      )}
    </Container>
  );
};

export default MyBookings;
