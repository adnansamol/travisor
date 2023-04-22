import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getBookedPackageByIdAPI } from "../service/booking-api";
import { addDays } from "../util/date-functions";
import { MdLocalAirport } from "react-icons/md";

const Container = styled.div``;
const DetailsContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 50px;
`;
const TransportContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 50px;
`;
const HotelContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 50px;
`;

const BookingDetailView = () => {
  const [booking, setBooking] = useState();
  const params = useParams();

  useEffect(() => {
    fetchTravelPackage();
  }, []);

  const fetchTravelPackage = async () => {
    const response = await getBookedPackageByIdAPI(params.id);

    setBooking(response);
  };

  return (
    booking && (
      <Container>
        <DetailsContainer>
          <h3>Package Details</h3>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Destination</th>
                <th>Days</th>
                <th>Price</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booking.p_name}</td>
                <td>{booking.p_destination}</td>
                <td>{booking.p_days}</td>
                <td>{booking.p_price.base_price}</td>
                <td>{booking.p_price.discount}</td>
              </tr>
            </tbody>
          </table>
        </DetailsContainer>
        <DetailsContainer>
          <h3>Guests Details</h3>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {booking.p_guests.map((guest) => (
                <tr>
                  <td>{guest.name}</td>
                  <td>{guest.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DetailsContainer>
        {booking.p_flight && (
          <TransportContainer>
            <h3>Flight Details</h3>
            <h6>
              <MdLocalAirport size={20} /> {booking.p_flight.airport}
            </h6>
            {booking.p_flight.stops.map((stop) => (
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Airline</th>
                    <th>Plane</th>
                    <th>Class</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{stop.airline}</td>
                    <td>{stop.plane}</td>
                    <td>{stop.planeClass}</td>
                    <td>{stop.from}</td>
                    <td>{stop.to}</td>
                    <td>
                      <b>{stop.departure_time}</b>
                      <br />
                      {new Date(booking.p_start_date).toLocaleDateString()}
                    </td>
                    <td>
                      <b>{stop.arrival_time}</b>
                      <br />
                      {new Date(booking.p_start_date).toLocaleDateString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </TransportContainer>
        )}
        {booking.p_return_flight && (
          <TransportContainer>
            <h3>Return Flight Details</h3>
            <h6>
              <MdLocalAirport size={20} /> {booking.p_flight.airport}
            </h6>
            {booking.p_return_flight.stops.map((stop) => (
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Airline</th>
                    <th>Plane</th>
                    <th>Class</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{stop.airline}</td>
                    <td>{stop.plane}</td>
                    <td>{stop.planeClass}</td>
                    <td>{stop.from}</td>
                    <td>{stop.to}</td>
                    <td>
                      <b>{stop.departure_time}</b>
                      <br />
                      {new Date(
                        addDays(booking.p_start_date, booking.p_days)
                      ).toLocaleDateString()}
                    </td>
                    <td>
                      <b>{stop.arrival_time}</b>
                      <br />
                      {new Date(
                        addDays(booking.p_start_date, booking.p_days)
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </TransportContainer>
        )}
        {booking.p_transport && (
          <TransportContainer>
            <h3>Transport Details</h3>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Vehicle</th>
                  <th>Seats</th>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{booking.p_transport.vehicle}</td>
                  <td>{booking.p_transport.seat}</td>
                  <td>{booking.p_transport.type}</td>
                  <td>{booking.p_transport.price}</td>
                </tr>
              </tbody>
            </table>
          </TransportContainer>
        )}
        {booking.p_hotel && (
          <HotelContainer>
            <h3>Hotel Details</h3>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Hotel Name</th>
                  <th>Room Type</th>
                  <th>Address</th>
                  <th>Dine Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{booking.p_hotel.name}</td>
                  <td>{booking.p_hotel.type}</td>
                  <td>{booking.p_hotel.address}</td>
                  <td>{booking.p_hotel.dineIncluded ? "yes" : "no"}</td>
                </tr>
              </tbody>
            </table>
          </HotelContainer>
        )}
      </Container>
    )
  );
};

export default BookingDetailView;
