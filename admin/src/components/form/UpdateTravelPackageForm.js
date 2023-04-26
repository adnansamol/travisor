import React, { useRef, useState } from "react";
import { destinations } from "../../constant/destinations";
import { getAgencyProfileAPI } from "../../service/agency-api";
import {
  getHtmlDateFormat,
  getShortDate,
  priceFormatter,
} from "../../util/formatter";
import { addDays } from "../../util/date-functions";
import Transports from "../transport/Transports";
import Flights from "../flights/Flights";
import ReturnFlights from "../flights/ReturnFlights";
import Hotels from "../hotels/Hotels";
import Modal from "react-modal";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { IoLocationSharp, IoClose } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { MdFlightClass, MdAirplaneTicket } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTravelPackageByIdAPI } from "../../service/package-api";
import ActivityForm from "./ActivityForm";

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
  font-size: 13px;
`;
const FlightTime = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const FlightPlace = styled.div`
  font-size: 14px;
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
  margin-bottom: 10px;
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
const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 0 10px 5px;
`;

const HotelContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  margin-bottom: 20px;
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
`;

const HotelImage = styled.img`
  width: 280px;
  height: 180px;
`;
const ActivityContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: clip;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
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
    ${colors.dodgerblue} 20%,
    transparent 70%
  );
  color: white;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 18px;
`;
const TitleContainer = styled.div`
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

const UpdateTravelPackageForm = ({ updateTravelPackage }) => {
  const [travelPackage, setTravelPackage] = useState();
  const [flight, setFlight] = useState();
  const [returnFlight, setReturnFlight] = useState();
  const [transport, setTransport] = useState();
  const [hotel, setHotel] = useState();

  const [isOpenFlight, setIsOpenFlight] = useState(false);
  const [isOpenReturnFlight, setIsOpenReturnFlight] = useState(false);
  const [isOpenTransport, setIsOpenTransport] = useState(false);
  const [isOpenHotel, setIsOpenHotel] = useState(false);

  const [activities, setActivities] = useState([]);
  const [days, setDays] = useState(0);

  const destinationRef = useRef();
  const startDateRef = useRef();

  const daysRef = useRef();

  const params = useParams();

  useEffect(() => {
    const fetchTravelPackage = async () => {
      const data = await getTravelPackageByIdAPI(params.id);
      setTravelPackage(data);
      setDays(data.p_days);
      console.log(data);
      if (data.p_hotel) {
        setHotel(data.p_hotel);
      }
      if (data.p_transport) {
        setTransport(data.p_transport);
      }
      if (data.p_flight) {
        setFlight(data.p_flight);
      }
      if (data.p_return_flight) {
        setReturnFlight(data.p_return_flight);
      }
      if (data.p_days_plan.length > 0) {
        setActivities(data.p_days_plan);
      }
    };
    fetchTravelPackage();
  }, []);
  const createTravelPackageHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    if (
      isValid(flight, "Flight") &&
      isValid(returnFlight, "Return Flight") &&
      isValid(transport, "Transport") &&
      isValid(hotel, "Hotel")
    ) {
      if (form.p_images.files.length > 0 && form.p_images.files.length < 3) {
        return alert("Please select atleast 3 images!");
      }
      const formData = new FormData(form);
      formData.append("p_agency_id", _id);
      formData.append("p_flight", JSON.stringify(flight));
      formData.append("p_return_flight", JSON.stringify(returnFlight));
      formData.append("p_transport", JSON.stringify(transport));
      formData.append("p_hotel", JSON.stringify(hotel));
      formData.append("p_days_plan", JSON.stringify(activities));
      formData.append("p_defaultImagePreview", travelPackage.p_imagePreview);
      formData.append("p_defaultImages", travelPackage.p_images);
      updateTravelPackage(params.id, formData);
    }
  };

  const openFlight = () => {
    if (destinationRef.current.value === "") {
      alert("Please select the destination first");
    } else if (startDateRef.current.value === "") {
      alert("Please select the start date first");
    } else {
      setIsOpenFlight(true);
    }
  };
  const openReturnFlight = () => {
    if (destinationRef.current.value === "") {
      alert("Please select the destination first");
    } else if (startDateRef.current.value === "") {
      alert("Please select the start date first");
    } else {
      setIsOpenReturnFlight(true);
    }
  };
  const openTransport = () => {
    setIsOpenTransport(true);
  };
  const openHotel = () => {
    if (destinationRef.current.value === "") {
      alert("Please select the destination first");
    } else {
      setIsOpenHotel(true);
    }
  };
  const closeFlight = () => {
    setIsOpenFlight(false);
  };
  const closeTransport = () => {
    setIsOpenTransport(false);
  };
  const closeHotel = () => {
    setIsOpenHotel(false);
  };

  const isValid = (field, fieldName) => {
    if (field === undefined) {
      alert("please add " + fieldName);
      return false;
    }
    return true;
  };

  const removeActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id != id));
  };

  const updateDays = () => {
    setDays(daysRef.current.value);
  };
  return (
    travelPackage && (
      <>
        <Modal
          isOpen={isOpenHotel}
          style={customModalStyles}
          onRequestClose={closeHotel}
          shouldCloseOnOverlayClick={true}
        >
          <Hotels
            setIsOpen={setIsOpenHotel}
            destination={destinationRef.current && destinationRef.current.value}
            setHotel={setHotel}
          />
        </Modal>
        <Modal
          isOpen={isOpenFlight}
          style={customModalStyles}
          onRequestClose={closeFlight}
          shouldCloseOnOverlayClick={true}
        >
          <Flights
            setIsOpen={setIsOpenFlight}
            destination={destinationRef.current}
            startDate={startDateRef.current}
            setFlight={setFlight}
          />
        </Modal>
        <Modal
          isOpen={isOpenReturnFlight}
          style={customModalStyles}
          onRequestClose={closeFlight}
          shouldCloseOnOverlayClick={true}
        >
          <ReturnFlights
            setIsOpen={setIsOpenReturnFlight}
            destination={destinationRef.current}
            startDate={startDateRef.current}
            setFlight={setReturnFlight}
            days={daysRef.current}
          />
        </Modal>
        <Modal
          isOpen={isOpenTransport}
          style={customModalStyles}
          onRequestClose={closeTransport}
          shouldCloseOnOverlayClick={true}
        >
          <Transports
            setTransport={setTransport}
            setIsOpen={setIsOpenTransport}
          />
        </Modal>
        <form onSubmit={createTravelPackageHandler} name="addPackage">
          <div className="row">
            <div className="form-group col">
              <label className="form-label">Package Name</label>
              <input
                defaultValue={travelPackage.p_name}
                name="p_name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-5">
              <label className="form-label">Package Destination</label>
              <select
                ref={destinationRef}
                name="p_destination"
                className="form-select"
                defaultValue={travelPackage.p_destination}
                onChange={() => {
                  setHotel(undefined);
                  setFlight(undefined);
                  setTransport(undefined);
                }}
                required
              >
                <option value="">Select Destination</option>
                {destinations.map((destination) => (
                  <option value={destination}>{destination}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Package Description</label>
            <textarea
              defaultValue={travelPackage.p_description}
              name="p_description"
              className="form-control"
              required
            />
          </div>
          <div className="row">
            <div className="form-group col">
              <label className="form-label">Package Days</label>
              <input
                defaultValue={travelPackage.p_days}
                ref={daysRef}
                onChange={updateDays}
                name="p_days"
                className="form-control"
                type="number"
                min={3}
                required
              />
            </div>

            <div className="form-group col">
              <label className="form-label">Package Price</label>
              <input
                defaultValue={travelPackage.p_price.base_price}
                name="p_price"
                className="form-control"
                type="number"
                required
              />
            </div>
            <div className="form-group col">
              <label className="form-label">Discount (%)</label>
              <input
                name="p_discount"
                className="form-control"
                type="number"
                min={0}
                max={100}
                defaultValue={travelPackage.p_price.percentage}
                required
              />
            </div>
            <div className="form-group col">
              <label className="form-label">Start Date</label>
              <input
                defaultValue={getHtmlDateFormat(travelPackage.p_start_date)}
                ref={startDateRef}
                name="p_start_date"
                className="form-control"
                type="date"
                min={getHtmlDateFormat(new Date())}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Thumbnail Image</label>
            <input name="p_imagePreview" className="form-control" type="file" />
          </div>
          <div className="form-group">
            <label className="form-label">Images (minimum 3 images)</label>
            <input
              name="p_images"
              className="form-control"
              type="file"
              multiple
            />
          </div>
          <hr />
          <h4>Flight</h4>
          <div>
            <button
              type="button"
              onClick={openFlight}
              className="btn btn-primary"
            >
              Select Flight
            </button>
            {flight && (
              <FlightContainer>
                {flight.stops.map((stop) => (
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
                        <MdAirplaneTicket size={24} title="Flight Time" />:{" "}
                        {stop.time}
                      </p>
                    </FlightTypeContainer>
                  </>
                ))}
              </FlightContainer>
            )}
          </div>
          <hr />
          <h4>Return Flight</h4>
          <div>
            <button
              type="button"
              onClick={openReturnFlight}
              className="btn btn-primary"
            >
              Select Flight
            </button>
            {returnFlight && (
              <FlightContainer>
                {returnFlight.stops.map((stop) => (
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
                        <MdFlightClass size={24} title="planeClass" />:{" "}
                        {stop.planeClass}
                      </FlightClass>
                      <p>
                        <MdAirplaneTicket size={24} title="Flight Time" />:{" "}
                        {stop.time}
                      </p>
                    </FlightTypeContainer>
                  </>
                ))}
              </FlightContainer>
            )}
          </div>
          <hr />
          <h4>Transport</h4>
          <div>
            <button
              type="button"
              onClick={openTransport}
              className="btn btn-primary"
            >
              Select Transport
            </button>
            {transport && (
              <TransportContainer>
                <div style={{ display: "flex", gap: 50 }}>
                  <FaCar size={50} />{" "}
                  <div>
                    <TransportVehicle>{transport.vehicle}</TransportVehicle>
                    <TransportType>{transport.type}</TransportType>
                  </div>
                </div>
                Seats: <VehicleSeats>{transport.seat}</VehicleSeats>
                <p>{transport.description}</p>
              </TransportContainer>
            )}
          </div>
          <hr />
          <h4>Hotel Stay</h4>
          <div>
            <button
              type="button"
              onClick={openHotel}
              className="btn btn-primary"
            >
              Select Hotel
            </button>
            {hotel && (
              <HotelContainer>
                <HotelDetails>
                  <div>
                    <HotelName>{hotel.name}</HotelName>
                    <HotelAddress>
                      <IoLocationSharp />
                      {hotel.address}
                    </HotelAddress>
                    <br />
                    <div>Room Type: {hotel.type}</div>
                    <div>
                      Include dine:&nbsp;{hotel.dineIncluded ? "yes" : "no"}
                    </div>
                    <br />
                  </div>

                  <HotelImage src={hotel.images[0]} />
                </HotelDetails>
              </HotelContainer>
            )}
          </div>
          <hr />
          <div className="form-group">
            <label className="form-label">Refund Availability (in Days)</label>
            <input
              defaultValue={travelPackage.p_policies.cancellation.to}
              name="p_refund_date"
              className="form-control"
              type="number"
              min={1}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Refund Policy description</label>
            <textarea
              defaultValue={travelPackage.p_policies.cancellation.description}
              name="p_refund_desc"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Package Keywords</label>
            <input
              defaultValue={travelPackage.p_keywords}
              name="p_keywords"
              className="form-control"
              required
              placeholder="ex. beach, resort"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Package"
          />
        </form>
        <hr />
        {days && (
          <ActivityForm
            days={days}
            activites={activities}
            setActivities={setActivities}
          />
        )}
        <hr />
        {activities.length > 0 &&
          activities.map((activity, index) => (
            <ActivityContainer key={index}>
              <ActivityTopContainer>
                <div style={{ width: "60%", wordBreak: "break-all" }}>
                  <DayContainer>Day-{activity.day}</DayContainer>
                  <TitleContainer>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivitySite>
                      <IoLocationSharp />
                      {activity.site}
                    </ActivitySite>
                    <ActivityTitle>
                      {priceFormatter.format(activity.price)}/-
                    </ActivityTitle>
                  </TitleContainer>
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
                  onClick={() => removeActivity(activity.id)}
                />
                <ActivityImage src="https://res.cloudinary.com/debfaf0xn/image/upload/v1682359422/zouprrahkg8rkbrc9ja5.jpg" />
              </ActivityTopContainer>
              <ActivityDescription>{activity.description}</ActivityDescription>
            </ActivityContainer>
          ))}
      </>
    )
  );
};

export default UpdateTravelPackageForm;
