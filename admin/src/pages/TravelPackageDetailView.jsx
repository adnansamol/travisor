import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getTravelPackageByIdAPI } from "../service/package-api";

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

const TravelPackageDetailView = () => {
  const [travelPackage, setTravelPackage] = useState();
  const params = useParams();

  useEffect(() => {
    fetchTravelPackage();
  }, []);

  const fetchTravelPackage = async () => {
    const response = await getTravelPackageByIdAPI(params.id);
    console.log(response);
    setTravelPackage(response);
  };

  return (
    travelPackage && (
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
                <td>{travelPackage.p_name}</td>
                <td>{travelPackage.p_destination}</td>
                <td>{travelPackage.p_days}</td>
                <td>{travelPackage.p_price.base_price}</td>
                <td>{travelPackage.p_price.discount}</td>
              </tr>
            </tbody>
          </table>
        </DetailsContainer>

        {travelPackage.p_flight && (
          <TransportContainer>
            <h3>Flight Details</h3>
            {travelPackage.p_flight.stops.map((stop) => (
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
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
                    <td>{stop.plane}</td>
                    <td>{stop.class}</td>
                    <td>{stop.from}</td>
                    <td>{stop.to}</td>
                    <td>
                      <b>
                        {new Date(stop.departure)
                          .toLocaleTimeString()
                          .slice(0, 5)}
                      </b>
                      <br />
                      {new Date(stop.departure).toLocaleDateString()}
                    </td>
                    <td>
                      <b>
                        {new Date(stop.arrival)
                          .toLocaleTimeString()
                          .slice(0, 5)}
                      </b>
                      <br />
                      {new Date(stop.arrival).toLocaleDateString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </TransportContainer>
        )}
        {travelPackage.p_transport && (
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
                  <td>{travelPackage.p_transport.vehicle}</td>
                  <td>{travelPackage.p_transport.seat}</td>
                  <td>{travelPackage.p_transport.type}</td>
                  <td>{travelPackage.p_transport.price}</td>
                </tr>
              </tbody>
            </table>
          </TransportContainer>
        )}
        {travelPackage.p_hotel && (
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
                  <td>{travelPackage.p_hotel.name}</td>
                  <td>{travelPackage.p_hotel.room_types.toString()}</td>
                  <td>{travelPackage.p_hotel.address}</td>
                  <td>{travelPackage.p_hotel.dineIncluded ? "yes" : "no"}</td>
                </tr>
              </tbody>
            </table>
          </HotelContainer>
        )}
      </Container>
    )
  );
};

export default TravelPackageDetailView;
