import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";
import { FaCar } from "react-icons/fa";
import { MdFlightClass, MdFlightLand } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { travel_package } from "../constant/package";
import { getShortDate, getShortTime } from "../util/formatter";
import { IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../context/package-context";
import Modal from "react-modal";
import Button from "../components/ui/Button";
import Hotels from "../components/hotels/Hotels";
import Flights from "../components/flights/Flights";
import Transports from "../components/transport/Transports";

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
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
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
const HotelDineContainer = styled.ul``;
const HotelDine = styled.li`
  font-size: 13px;
`;
const HotelImage = styled.img`
  width: 200px;
  height: 180px;
`;
const RemoveButton = styled(Button)`
  border: 1px solid ${colors.crimson};
  color: ${colors.crimson};
  font-size: 12px;
  padding: 5px 8px;
  background-color: white;
  font-weight: 500;
  margin: 0 5px;
`;
const AddButton = styled(Button)`
  border: 1px solid ${colors.green};
  color: ${colors.green};
  font-size: 12px;
  padding: 5px 8px;
  background-color: white;
  font-weight: 500;
  margin: 0 5px;
`;
const ChangeButton = styled(Button)`
  border: 1px solid ${colors.dodgerblue};
  color: ${colors.dodgerblue};
  font-size: 12px;
  padding: 5px 8px;
  background-color: white;
  font-weight: 500;
  margin: 0 5px;
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
    top: 120,
    height: 480,
    width: "80%",
    margin: "auto",
  },
};
const Summary = () => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openFlightModal, setOpenFlightModal] = useState(false);
  const [openTransportModal, setOpenTransportModal] = useState(false);
  const [openHotelModal, setOpenHotelModal] = useState(false);

  const removeFlight = () => {
    const flightprice = travelPackage.p_flight.price;
    const newPrice = {
      ...travelPackage.p_price,
      base_price: travelPackage.p_price.base_price - flightprice,
    };
    setTravelPackage({
      ...travelPackage,
      p_price: newPrice,
      p_flight: undefined,
    });
  };

  const removeTransport = () => {
    const transportPrice = travelPackage.p_transport.price;
    const newPrice = {
      ...travelPackage.p_price,
      base_price: travelPackage.p_price.base_price - transportPrice,
    };
    setTravelPackage({
      ...travelPackage,
      p_transport: undefined,
      p_price: newPrice,
    });
  };
  const closeHotelModal = () => {
    setOpenHotelModal(false);
  };
  const closeFlightModal = () => {
    setOpenFlightModal(false);
  };
  const closeTransportModal = () => {
    setOpenTransportModal(false);
  };
  return (
    travelPackage && (
      <Container>
        <Modal
          isOpen={openHotelModal}
          style={customModalStyles}
          onRequestClose={closeHotelModal}
          shouldCloseOnOverlayClick={true}
        >
          <Hotels
            setIsOpen={setOpenHotelModal}
            destination={travelPackage.p_destination}
          />
        </Modal>
        <Modal
          isOpen={openFlightModal}
          style={customModalStyles}
          onRequestClose={closeFlightModal}
          shouldCloseOnOverlayClick={true}
        >
          <Flights setIsOpen={setOpenFlightModal} />
        </Modal>
        <Modal
          isOpen={openTransportModal}
          style={customModalStyles}
          onRequestClose={closeTransportModal}
          shouldCloseOnOverlayClick={true}
        >
          <Transports setIsOpen={setOpenTransportModal} />
        </Modal>
        <FlightContainer>
          <TitleContainer>
            <Title>Flight</Title>
            {travelPackage.p_flight ? (
              <div>
                <RemoveButton onClick={removeFlight}>REMOVE</RemoveButton>
                <ChangeButton onClick={() => setOpenFlightModal(true)}>
                  CHANGE
                </ChangeButton>
              </div>
            ) : (
              <AddButton onClick={() => setOpenFlightModal(true)}>
                ADD
              </AddButton>
            )}
          </TitleContainer>
          {travelPackage.p_flight && (
            <>
              <hr />
              {travelPackage.p_flight.stops.map((stop) => (
                <>
                  <Plane>{stop.plane}</Plane>
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
                      <MdFlightLand size={24} title="Flight Time" />:{" "}
                      {stop.time}
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
            {travelPackage.p_transport ? (
              <div>
                <RemoveButton onClick={removeTransport}>REMOVE</RemoveButton>
                <ChangeButton onClick={() => setOpenTransportModal(true)}>
                  CHANGE
                </ChangeButton>
              </div>
            ) : (
              <AddButton onClick={() => setOpenTransportModal(true)}>
                ADD
              </AddButton>
            )}
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
            <ChangeButton onClick={() => setOpenHotelModal(true)}>
              CHANGE
            </ChangeButton>
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
            {travelPackage.p_flight ? (
              <div>
                <RemoveButton onClick={removeFlight}>REMOVE</RemoveButton>
                <ChangeButton onClick={() => setOpenFlightModal(true)}>
                  CHANGE
                </ChangeButton>
              </div>
            ) : (
              <AddButton onClick={() => setIsOpen}>ADD</AddButton>
            )}
          </TitleContainer>
          {travelPackage.p_flight && (
            <>
              <hr />
              {travelPackage.p_flight.stops.map((stop) => (
                <>
                  <Plane>{stop.plane}</Plane>
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
                      <MdFlightClass size={24} title="class" />:{" "}
                      {stop.planeClass}
                    </FlightClass>
                    <p>
                      <MdFlightLand size={24} title="Flight Time" />:{" "}
                      {stop.time}
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

export default Summary;
