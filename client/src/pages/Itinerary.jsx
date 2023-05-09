import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";
import { FaCar } from "react-icons/fa";
import { MdFlightClass, MdAirplaneTicket } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { travel_package } from "../constant/package";
import { getShortDate, getShortTime, priceFormatter } from "../util/formatter";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../context/package-context";
import Modal from "react-modal";
import Button from "../components/ui/Button";
import Hotels from "../components/hotels/Hotels";
import Flights from "../components/flights/Flights";
import Transports from "../components/transport/Transports";
import { addDays } from "../util/date-functions";
import ReturnFlights from "../components/flights/ReturnFlights";
import Activities from "../components/activities/Activities";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
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
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
  width: 100%;
  border-radius: 5px;
  overflow: clip;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
`;
const ActivityTopContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const DayContainer = styled.div`
  display: flex;
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${colors.teal500} 20%,
    transparent 70%
  );
  color: white;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 18px;
`;
const ActivityTitleContainer = styled.div`
  padding: 5px 10px;
`;
const ActivityTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.black};
`;
const ActivitySite = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.gray};
`;
const ActivityDescription = styled.div`
  background-color: ${colors.orange100};
  border: 1px solid ${colors.orange400};
  word-break: break-all;
  font-size: 14px;
  padding: 5px 10px;
  margin-top: 5px;
`;
const ActivityImage = styled.img`
  width: 150px;
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
const Itinerary = () => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const [openFlightModal, setOpenFlightModal] = useState(false);
  const [openReturnFlightModal, setOpenReturnFlightModal] = useState(false);
  const [openTransportModal, setOpenTransportModal] = useState(false);
  const [openHotelModal, setOpenHotelModal] = useState(false);
  const [openActivitiesModal, setOpenActivitiesModal] = useState(false);

  const [flightCost, setFlightCost] = useState(
    travelPackage.p_flight ? Number(travelPackage.p_flight.price) : 0
  );
  const [returnFlightCost, setReturnFlightCost] = useState(
    travelPackage.p_return_flight
      ? Number(travelPackage.p_return_flight.price)
      : 0
  );
  const [hotelCost, setHotelCost] = useState(
    Number(travelPackage.p_hotel.price_per_room)
  );
  const [activitiesCost, setActivitiesCost] = useState(
    travelPackage.p_days_plan.length > 0
      ? travelPackage.p_days_plan.reduce(
          (sum, value) => sum + Number(value.price),
          0
        )
      : 0
  );
  const [transportCost, setTransportCost] = useState(
    travelPackage.p_transport ? Number(travelPackage.p_transport.price) : 0
  );

  useEffect(() => {
    setTravelPackage({
      ...travelPackage,
      p_price: {
        ...travelPackage.p_price,
        total_cost:
          travelPackage.p_price.base_price +
          hotelCost +
          flightCost +
          returnFlightCost +
          transportCost +
          activitiesCost,
        discount:
          ((travelPackage.p_price.base_price +
            hotelCost +
            flightCost +
            returnFlightCost +
            transportCost +
            activitiesCost) *
            travelPackage.p_price.percentage) /
          100,
      },
    });
  }, [hotelCost, transportCost, flightCost, returnFlightCost, activitiesCost]);

  const removeFlight = () => {
    setFlightCost(0);
    setTravelPackage({
      ...travelPackage,
      p_flight: undefined,
    });
  };
  const removeReturnFlight = () => {
    setReturnFlightCost(0);
    setTravelPackage({
      ...travelPackage,
      p_return_flight: undefined,
    });
  };

  const removeTransport = () => {
    setTransportCost(0);
    setTravelPackage({
      ...travelPackage,
      p_transport: undefined,
    });
  };
  const removeActivity = (id, price) => {
    setActivitiesCost((old) => old - price);
    setTravelPackage({
      ...travelPackage,
      p_days_plan: travelPackage.p_days_plan.filter((item) => item.id != id),
    });
  };
  const closeHotelModal = () => {
    setOpenHotelModal(false);
  };
  const closeActivitesModal = () => {
    setOpenActivitiesModal(false);
  };
  const closeFlightModal = () => {
    setOpenFlightModal(false);
  };
  const closeReturnFlightModal = () => {
    setOpenReturnFlightModal(false);
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
            setHotelCost={setHotelCost}
          />
        </Modal>
        <Modal
          isOpen={openActivitiesModal}
          style={customModalStyles}
          onRequestClose={closeActivitesModal}
          shouldCloseOnOverlayClick={true}
        >
          <Activities
            setIsOpen={setOpenActivitiesModal}
            setActivitiesCost={setActivitiesCost}
          />
        </Modal>
        <Modal
          isOpen={openFlightModal}
          style={customModalStyles}
          onRequestClose={closeFlightModal}
          shouldCloseOnOverlayClick={true}
        >
          <Flights
            setIsOpen={setOpenFlightModal}
            setFlightCost={setFlightCost}
          />
        </Modal>
        <Modal
          isOpen={openReturnFlightModal}
          style={customModalStyles}
          onRequestClose={closeReturnFlightModal}
          shouldCloseOnOverlayClick={true}
        >
          <ReturnFlights
            setIsOpen={setOpenReturnFlightModal}
            destination={travelPackage.p_destination}
            startDate={travelPackage.p_start_date}
            days={travelPackage.p_days}
            setReturnFlightCost={setReturnFlightCost}
          />
        </Modal>
        <Modal
          isOpen={openTransportModal}
          style={customModalStyles}
          onRequestClose={closeTransportModal}
          shouldCloseOnOverlayClick={true}
        >
          <Transports
            setIsOpen={setOpenTransportModal}
            setTransportCost={setTransportCost}
          />
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
        {travelPackage.all_activities.length > 0 && (
          <>
            <ActivityContainer style={{ padding: 10 }}>
              <TitleContainer>
                <Title>Activities</Title>
                <AddButton onClick={() => setOpenActivitiesModal(true)}>
                  Add
                </AddButton>
              </TitleContainer>
            </ActivityContainer>
            {travelPackage.p_days_plan
              .sort((item1, item2) => item1.day - item2.day)
              .map((activity, index) => (
                <ActivityContainer key={index}>
                  <ActivityTopContainer>
                    <div style={{ width: "60%", wordBreak: "break-all" }}>
                      <DayContainer>Day-{activity.day}</DayContainer>
                      <ActivityTitleContainer>
                        <ActivityTitle>{activity.title}</ActivityTitle>

                        <ActivitySite>
                          <IoLocationSharp />
                          {activity.site}
                        </ActivitySite>
                        <ActivityTitle>
                          {priceFormatter.format(activity.price)}/-
                        </ActivityTitle>
                      </ActivityTitleContainer>
                    </div>
                    <IoClose
                      size={30}
                      fill={"white"}
                      style={{
                        position: "absolute",
                        right: 0,
                        backgroundColor: "black",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        removeActivity(activity.id, activity.price);
                      }}
                    />
                    <ActivityImage src={activity.image} />
                  </ActivityTopContainer>
                  <ActivityDescription>
                    {activity.description}
                  </ActivityDescription>
                </ActivityContainer>
              ))}
          </>
        )}
        <FlightContainer>
          <TitleContainer>
            <Title>Return Flight</Title>
            {travelPackage.p_return_flight ? (
              <div>
                <RemoveButton onClick={removeReturnFlight}>REMOVE</RemoveButton>
                <ChangeButton onClick={() => setOpenReturnFlightModal(true)}>
                  CHANGE
                </ChangeButton>
              </div>
            ) : (
              <AddButton onClick={() => setOpenReturnFlightModal(true)}>
                ADD
              </AddButton>
            )}
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
