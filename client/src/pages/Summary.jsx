import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";
import { FaCar } from "react-icons/fa";
import { MdFlightClass, MdAirplaneTicket } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { getShortDate, priceFormatter } from "../util/formatter";
import { IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../context/package-context";
import { addDays } from "../util/date-functions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
`;

const FlightContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  margin: auto;
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
  font-size: 15px;
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
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HotelName = styled.div`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 500;
`;
const HotelAddress = styled.div`
  color: ${colors.gray};
  font-size: 13px;
  width: 80%;
`;
const HotelRoomType = styled.div`
  color: ${colors.black};
  font-weight: 500;
  margin-bottom: 5px;
`;
const HotelDineContainer = styled.ul`
  background: linear-gradient(to right, orangered, ${colors.orange});
  border-radius: 5px;
  color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  width: 65%;
`;

const HotelDine = styled.li`
  font-size: 13px;
`;

const HotelImage = styled.img`
  width: 200px;
  height: 180px;
`;
const ActivityContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const Itinerary = () => {
  const { travelPackage } = useContext(PackageContext);

  return (
    travelPackage && (
      <Container>
        <FlightContainer>
          <TitleContainer>
            <Title>Flight</Title>
          </TitleContainer>
          {travelPackage.p_flight && (
            <>
              <hr />
              {travelPackage.p_flight.stops.map((stop) => (
                <>
                  <Plane>
                    {stop.airline} | {stop.plane}
                  </Plane>
                  <FlightTimeContainer>
                    <FlightDeparture>
                      <FlightTime>{stop.departure_time}</FlightTime>
                      <FlightDate>
                        {getShortDate(travelPackage.p_start_date)}
                      </FlightDate>
                      <FlightPlace>{stop.from}</FlightPlace>
                    </FlightDeparture>

                    <HorizontalRule></HorizontalRule>
                    <IoIosAirplane size={24} />
                    <HorizontalRule></HorizontalRule>
                    <FlightArrival>
                      <FlightTime>{stop.arrival_time}</FlightTime>
                      <FlightDate>
                        {getShortDate(travelPackage.p_start_date)}
                      </FlightDate>
                      <FlightPlace>{stop.to}</FlightPlace>
                    </FlightArrival>
                  </FlightTimeContainer>
                  <FlightTypeContainer>
                    <FlightClass>
                      <MdFlightClass size={24} title="planeClass" />:{" "}
                      {stop.planeClass}
                    </FlightClass>
                    <p>
                      <MdAirplaneTicket size={24} title="Ticket Price" />:{" "}
                      {priceFormatter.format(travelPackage.p_flight.price)}
                    </p>
                  </FlightTypeContainer>
                </>
              ))}
            </>
          )}
        </FlightContainer>
        <TransportContainer>
          <TitleContainer>
            <Title>Transport</Title>
          </TitleContainer>
          {travelPackage.p_transport && (
            <>
              <hr />
              <div style={{ display: "flex", gap: 50 }}>
                <FaCar size={50} />{" "}
                <div>
                  <TransportVehicle>
                    {travelPackage.p_transport.vehicle}
                  </TransportVehicle>
                  <TransportType>
                    {travelPackage.p_transport.type}
                  </TransportType>
                </div>
              </div>
              Seats:{" "}
              <VehicleSeats>{travelPackage.p_transport.seat}</VehicleSeats>
              <p>{travelPackage.p_transport.description}</p>
            </>
          )}
        </TransportContainer>
        <HotelContainer>
          <TitleContainer>
            <Title>Check In & Stay</Title>
          </TitleContainer>
          {travelPackage.p_hotel && (
            <>
              <hr />
              <HotelDetails>
                <div>
                  <HotelName>{travelPackage.p_hotel.name}</HotelName>
                  <HotelAddress>
                    <IoLocationSharp />
                    {travelPackage.p_hotel.address}
                  </HotelAddress>
                  <HotelRoomType>
                    Type: {travelPackage.p_hotel.type}
                  </HotelRoomType>
                  Includes:
                  {travelPackage.p_hotel.dineIncluded == true ? (
                    <HotelDineContainer>
                      <HotelDine>Breakfast</HotelDine>
                      <HotelDine>Lunch</HotelDine>
                      <HotelDine>Dinner</HotelDine>
                    </HotelDineContainer>
                  ) : (
                    <p style={{ color: "orangered" }}>Dine is not included</p>
                  )}
                </div>

                <HotelImage src={travelPackage.p_hotel.images[0]} />
              </HotelDetails>
            </>
          )}
        </HotelContainer>
        <FlightContainer>
          <TitleContainer>
            <Title>Return Flight</Title>
          </TitleContainer>
          {travelPackage.p_return_flight && (
            <>
              <hr />
              {travelPackage.p_return_flight.stops.map((stop) => (
                <>
                  <Plane>{stop.plane}</Plane>
                  <FlightTimeContainer>
                    <FlightDeparture>
                      <FlightTime>{stop.departure_time}</FlightTime>
                      <FlightDate>
                        {getShortDate(
                          addDays(
                            travelPackage.p_start_date,
                            travelPackage.p_days
                          )
                        )}
                      </FlightDate>
                      <FlightPlace>{stop.from}</FlightPlace>
                    </FlightDeparture>

                    <HorizontalRule></HorizontalRule>
                    <IoIosAirplane size={24} />
                    <HorizontalRule></HorizontalRule>
                    <FlightArrival>
                      <FlightTime>{stop.arrival_time}</FlightTime>
                      <FlightDate>
                        {getShortDate(
                          addDays(
                            travelPackage.p_start_date,
                            travelPackage.p_days
                          )
                        )}
                      </FlightDate>
                      <FlightPlace>{stop.to}</FlightPlace>
                    </FlightArrival>
                  </FlightTimeContainer>
                  <FlightTypeContainer>
                    <FlightClass>
                      <MdFlightClass size={24} title="class" />:{" "}
                      {stop.planeClass}
                    </FlightClass>
                    <p>
                      <MdAirplaneTicket size={24} title="Ticket Price" />:{" "}
                      {priceFormatter.format(
                        travelPackage.p_return_flight.price
                      )}
                    </p>
                  </FlightTypeContainer>
                </>
              ))}
            </>
          )}
        </FlightContainer>
      </Container>
    )
  );
};

export default Itinerary;
