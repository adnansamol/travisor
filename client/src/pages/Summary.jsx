import React from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";
import { FaCar } from "react-icons/fa";
import { MdFlightClass, MdFlightLand } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { travel_package } from "../constant/package";
import { getShortDate, getShortTime } from "../util/formatter";
import { IoLocationSharp } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const FlightContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const Plane = styled.div`
  font-weight: 600;
  margin: 3px 2px;
  color: ${colors.gray};
`;
const FlightTimeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;
const HorizontalRule = styled.div`
  border-bottom: 1px solid black;
  width: 29%;
  margin: 0 8px;
`;
const FlightDeparture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlightArrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlightDate = styled.div`
  font-size: 16px;
`;
const FlightTime = styled.div`
  font-weight: 600;
`;
const FlightPlace = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray};
`;
const FlightTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FlightClass = styled.div``;

const TransportContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const TransportVehicle = styled.div`
  font-weight: 600;
  color: ${colors.black};
  font-size: 18px;
`;
const TransportType = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray};
`;
const VehicleSeats = styled.div`
  font-weight: 500;
  color: ${colors.gray};
`;
const HotelContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const HotelName = styled.div`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 500;
`;
const HotelAddress = styled.div`
  color: ${colors.gray};
`;
const HotelRooms = styled.div`
  color: ${colors.black};
  font-weight: 500;
`;
const Summary = () => {
  return (
    <Container>
      <FlightContainer>
        <h3>Flight</h3>
        <Plane>{travel_package.p_flight.plane}</Plane>
        <hr />

        <FlightTimeContainer>
          <FlightDeparture>
            <FlightTime>
              {getShortTime(travel_package.p_flight.departure)}
            </FlightTime>
            <FlightDate>
              {getShortDate(travel_package.p_flight.departure)}
            </FlightDate>
            <FlightPlace>{travel_package.p_start_location}</FlightPlace>
          </FlightDeparture>

          <HorizontalRule></HorizontalRule>
          <IoIosAirplane size={24} />
          <HorizontalRule></HorizontalRule>
          <FlightArrival>
            <FlightTime>
              {getShortTime(travel_package.p_flight.departure)}
            </FlightTime>
            <FlightDate>
              {getShortDate(travel_package.p_flight.departure)}
            </FlightDate>
            <FlightPlace>{travel_package.p_destination}</FlightPlace>
          </FlightArrival>
        </FlightTimeContainer>
        <FlightTypeContainer>
          <FlightClass>
            <MdFlightClass size={24} title="Class" />:{" "}
            {travel_package.p_flight.class}
          </FlightClass>
          <p>
            <MdFlightLand size={24} title="Flight Time" />:{" "}
            {travel_package.p_flight.time}
          </p>
        </FlightTypeContainer>
      </FlightContainer>
      <TransportContainer>
        <h3>Transport</h3>
        <hr />
        <div style={{ display: "flex", gap: 50 }}>
          <FaCar size={50} />{" "}
          <div>
            <TransportVehicle>
              {travel_package.p_transport.vehicle}
            </TransportVehicle>
            <TransportType>{travel_package.p_transport.type}</TransportType>
          </div>
        </div>
        Seats: <VehicleSeats>{travel_package.p_transport.seat}</VehicleSeats>
        <p>{travel_package.p_transport.description}</p>
      </TransportContainer>
      <HotelContainer>
        <h3>Check In</h3>
        <hr />
        <HotelName>{travel_package.p_hotel.name}</HotelName>
        Type: {travel_package.p_hotel.type}
        <HotelAddress>
          <IoLocationSharp />
          {travel_package.p_hotel.address}
        </HotelAddress>
        <HotelRooms>Total rooms: {travel_package.p_hotel.rooms}</HotelRooms>
        {travel_package.p_hotel.dineIncluded}
      </HotelContainer>
    </Container>
  );
};

export default Summary;
