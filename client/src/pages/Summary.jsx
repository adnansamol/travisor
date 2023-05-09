import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";

import { IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../context/package-context";

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

const SummaryContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  margin: auto;
`;
const DayContainer = styled.div`
  background-color: ${colors.orange50}AA;
  padding: 10px;
  margin: 5px 0;
`;
const DayNumber = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 3px 2px;
  color: ${colors.black};
`;
const Text = styled.div`
  color: ${colors.black};
  font-size: 14px;
`;
const BoldText = styled.span`
  font-weight: 500;
  color: ${colors.black};
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
const Summary = () => {
  const { travelPackage } = useContext(PackageContext);

  return (
    travelPackage && (
      <Container>
        <SummaryContainer>
          <TitleContainer>
            <Title>Summary</Title>
          </TitleContainer>
          <hr />

          <DayContainer>
            <DayNumber>Day-1</DayNumber>
            {travelPackage.p_flight && (
              <>
                <h6>
                  Departure from airport: {travelPackage.p_flight.airport}
                </h6>
                <Text>
                  <i>Flight</i>:{" "}
                  <BoldText>
                    {travelPackage.p_flight.stops[0].airline}{" "}
                    {travelPackage.p_flight.stops[0].plane}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_flight.stops[0].departure_time} -{" "}
                    {travelPackage.p_flight.stops[0].arrival_time}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_start_location} -{" "}
                    {travelPackage.p_destination}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_flight.stops.length - 1} Stops
                  </BoldText>
                </Text>
                <hr />
              </>
            )}
            {travelPackage.p_transport && (
              <Text>
                <i>{travelPackage.p_transport.vehicle} drives to the hotel.</i>
              </Text>
            )}
            <h6>Check In</h6>
            <Text>
              <i>
                <BoldText>{travelPackage.p_hotel.name}</BoldText>
              </i>
              <Text>
                <IoLocationSharp />
                {travelPackage.p_hotel.address}
              </Text>
              <Text>
                <i>Type</i>: {travelPackage.p_hotel.type}
              </Text>
            </Text>
          </DayContainer>
          {travelPackage.p_days_plan &&
            travelPackage.p_days_plan.map((activity) => (
              <DayContainer>
                <DayNumber>Day-{activity.day}</DayNumber>
                {travelPackage.p_transport && (
                  <Text>
                    <i>
                      {" "}
                      {travelPackage.p_transport.vehicle} drives to{" "}
                      {activity.site}.
                    </i>
                  </Text>
                )}
                <h6>Activity</h6>
                <Text>
                  <BoldText style={{ fontSize: 16 }}>{activity.title}</BoldText>
                  <Text>
                    <IoLocationSharp />
                    {activity.site}
                  </Text>
                  <br />
                  <Text style={{ fontSize: 16 }}>{activity.description}</Text>
                </Text>
              </DayContainer>
            ))}
          {travelPackage.p_return_flight && (
            <DayContainer>
              <DayNumber>Day-{travelPackage.p_days}</DayNumber>

              <>
                <h6>
                  Departure from airport:{" "}
                  {travelPackage.p_return_flight.airport}
                </h6>
                <Text>
                  <i>Flight</i>:{" "}
                  <BoldText>
                    {travelPackage.p_return_flight.stops[0].airline}{" "}
                    {travelPackage.p_return_flight.stops[0].plane}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_return_flight.stops[0].departure_time} -{" "}
                    {travelPackage.p_return_flight.stops[0].arrival_time}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_destination} -{" "}
                    {travelPackage.p_start_location}
                  </BoldText>{" "}
                  |{" "}
                  <BoldText>
                    {travelPackage.p_return_flight.stops.length - 1} Stops
                  </BoldText>
                </Text>
              </>
            </DayContainer>
          )}
        </SummaryContainer>
      </Container>
    )
  );
};

export default Summary;
