import React, { useContext, useEffect, useRef } from "react";
import { IoIosAirplane } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdFlightClass, MdAirplaneTicket } from "react-icons/md";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { flights } from "../../constant/flights";
import { PackageContext } from "../../context/package-context";
import { getFlightsAPI } from "../../service/flight-api";
import {
  getShortDate,
  getShortTime,
  priceFormatter,
} from "../../util/formatter";
import Button from "../ui/Button";

const FlightContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  margin: auto;
  margin-bottom: 15px;
`;

const Airline = styled.div`
  margin: 3px 2px;
  font-size: 20px;
  color: ${colors.black};
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
  justify-content: center;
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

const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 0 10px 5px;
`;
const SelectButton = styled(Button)`
  background-color: ${colors.dodgerblue};
  color: white;
  padding: 5px 20px;
`;
const SelectedLabel = styled.div`
  background-color: orangered;
  color: white;
  width: fit-content;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 50px;
`;

const Flights = ({ setIsOpen, setFlightCost }) => {
  useEffect(() => {
    const fetchFlights = async () => {
      const response = await getFlightsAPI("Ahmedabad", "Mauritius");
      console.log(response);
    };
    // fetchFlights();
  }, []);
  return (
    <div>
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>
      {flights.map((flight) => (
        <Flight
          flight={flight}
          close={setIsOpen}
          setFlightCost={setFlightCost}
        />
      ))}
    </div>
  );
};

export default Flights;

const Flight = ({ flight, close, setFlightCost }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const planeClassRef = useRef();
  const nonStop = flight && flight.stops.length > 1 ? false : true;

  const selectFlight = () => {
    const stops = flight.stops;
    if (nonStop) {
      stops[0].from = travelPackage.p_start_location;
      stops[0].to = travelPackage.p_destination;
      stops[0].planeClass = planeClassRef.current.value;
    } else {
      stops[0].from = travelPackage.p_start_location;
      stops[0].to = "New Delhi";
      stops[1].from = "New Delhi";
      stops[1].to = travelPackage.p_destination;
      stops[0].planeClass = planeClassRef.current.value;
      stops[1].planeClass = planeClassRef.current.value;
    }

    const newFlight = {
      airport: flight.airport,
      stops: stops,
      price: flight.price,
    };
    setTravelPackage({ ...travelPackage, p_flight: newFlight });
    setFlightCost(flight.price);
    close(false);
  };
  return (
    travelPackage && (
      <FlightContainer>
        {travelPackage.p_flight &&
          travelPackage.p_flight.stops[0].plane == flight.stops[0].plane && (
            <SelectedLabel>SELECTED</SelectedLabel>
          )}
        <div style={{ margin: "auto" }}>
          <Airline>{flight.stops[0].airline}</Airline>
          <Plane>{flight.stops[0].plane}</Plane>
          <FlightTimeContainer>
            <FlightDeparture>
              <FlightTime>{flight.stops[0].departure_time}</FlightTime>
              <FlightDate>
                {getShortDate(travelPackage.p_start_date)}
              </FlightDate>
              <FlightPlace>{travelPackage.p_start_location}</FlightPlace>
            </FlightDeparture>

            <HorizontalRule></HorizontalRule>
            <div style={{ textAlign: "center" }}>
              <IoIosAirplane size={24} />
              <div style={{ fontSize: 12 }}>
                {nonStop ? "Non Stop" : flight.stops.length - 1 + " Stops"}
              </div>
            </div>
            <HorizontalRule></HorizontalRule>
            <FlightArrival>
              <FlightTime>
                {nonStop
                  ? flight.stops[0].arrival_time
                  : flight.stops[1].arrival_time}
              </FlightTime>
              <FlightDate>
                {getShortDate(travelPackage.p_start_date)}
              </FlightDate>
              <FlightPlace>{travelPackage.p_destination}</FlightPlace>
            </FlightArrival>
          </FlightTimeContainer>
          <FlightTypeContainer>
            <FlightClass>
              <MdFlightClass size={24} title="planeClass" />:{" "}
              <select ref={planeClassRef}>
                <option value={"Economy"}>Economy</option>
                <option value={"Business"}>Business</option>
                <option value={"First"}>First</option>
              </select>
            </FlightClass>
            <p>
              <MdAirplaneTicket size={24} title="Flight Time" />:{" "}
              {priceFormatter.format(flight.price)}
            </p>
          </FlightTypeContainer>
        </div>

        <SelectButton onClick={selectFlight}>Select</SelectButton>
      </FlightContainer>
    )
  );
};
