import React, { useRef, useState } from "react";
import { destinations } from "../../constant/destinations";
import { getAgencyProfileAPI } from "../../service/agency-api";
import { getHtmlDateFormat } from "../../util/formatter";
import { addDays } from "../../util/date-functions";
import Transports from "../transport/Transports";
import Flights from "../flights/Flights";
import Hotels from "../hotels/Hotels";
import Modal from "react-modal";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";

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

const AddTravelPackageForm = ({ createTravelPackage }) => {
  const [flight, setFlight] = useState();
  const [transport, setTransport] = useState();
  const [hotel, setHotel] = useState();

  const [isOpenFlight, setIsOpenFlight] = useState(false);
  const [isOpenTransport, setIsOpenTransport] = useState(false);
  const [isOpenHotel, setIsOpenHotel] = useState(false);

  const destinationRef = useRef();
  const createTravelPackageHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );

    const data = {
      p_agency_id: _id,
      p_name: form.p_name.value,
      p_description: form.p_description.value,
      p_destination: form.p_destination.value,
      p_days: form.p_days.value,
      p_price: form.p_price.value,
      p_refund_date: form.p_refund_date.value,
      p_refund_desc: form.p_refund_desc.value,
      p_image: form.p_imagePreview.files,
      p_hotel: hotel,
      p_transport: transport,
      p_flight: flight,
    };
    const formData = new FormData(form);
    createTravelPackage(formData);
  };

  const openFlight = () => {
    setIsOpenFlight(true);
  };
  const openTransport = () => {
    setIsOpenTransport(true);
  };
  const openHotel = () => {
    setIsOpenHotel(true);
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

  return (
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
        <Flights setIsOpen={setIsOpenFlight} />
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
            <input name="p_name" className="form-control" required />
          </div>
          <div className="form-group col-5">
            <label className="form-label">Package Destination</label>
            <select
              ref={destinationRef}
              name="p_destination"
              className="form-select"
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
          <textarea name="p_description" className="form-control" required />
        </div>
        <div className="row">
          <div className="form-group col">
            <label className="form-label">Package Days</label>
            <input
              name="p_days"
              className="form-control"
              type="number"
              min={1}
              required
            />
          </div>

          <div className="form-group col">
            <label className="form-label">Package Price</label>
            <input
              name="p_price"
              className="form-control"
              type="number"
              required
            />
          </div>
          <div className="form-group col">
            <label className="form-label">Start Date</label>
            <input
              name="p_start_date"
              className="form-control"
              type="date"
              min={getHtmlDateFormat(addDays(new Date(), 5))}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Thumbnail Image</label>
          <input
            name="p_imagePreview"
            className="form-control"
            type="file"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Images (minimum 3 images)</label>
          <input
            name="p_images"
            className="form-control"
            type="file"
            multiple
            required
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
        </div>
        <hr />
        <h4>Return Flight</h4>
        <div>
          <button
            type="button"
            onClick={openFlight}
            className="btn btn-primary"
          >
            Select Flight
          </button>
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
          <button type="button" onClick={openHotel} className="btn btn-primary">
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
            name="p_refund_date"
            className="form-control"
            type="number"
            min={1}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Refund Policy description</label>
          <textarea name="p_refund_desc" className="form-control" required />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Create Package"
        />
      </form>
    </>
  );
};

export default AddTravelPackageForm;
