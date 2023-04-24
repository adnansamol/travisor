import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { PackageContext } from "../../context/package-context";
import { getShortDate } from "../../util/formatter";
import Button from "../ui/Button";

const PaymentContainer = styled.div`
  width: 100%;
`;
const PaymentDetails = styled.div`
  height: 330px;
  width: 100%;
  margin: auto;
  overflow-y: scroll;
`;
const PaymentButtonContainer = styled.div`
  background-color: white;
  border-top: 1px solid;
  width: 100%;
  text-align: right;
`;
const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.div`
  text-align: right;
  font-weight: 500;
`;
const Text = styled.div`
  text-align: left;
`;

const PaymentButton = styled(Button)`
  margin-top: 15px;
  background-color: ${colors.dodgerblue};
  color: white;
`;
const PaymentSummary = ({ onMakePaymentHandler }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  return (
    <PaymentContainer>
      <h3 style={{ textAlign: "center" }}>Package Summary</h3>
      <PaymentDetails>
        <h6>Package Details</h6>
        <FieldContainer>
          <Label>Package Name: </Label>
          <Text>{travelPackage.p_name}</Text>
        </FieldContainer>
        <FieldContainer>
          <Label>Destination: </Label>
          <Text>
            {travelPackage.p_start_location} - {travelPackage.p_destination}
          </Text>
        </FieldContainer>
        <FieldContainer>
          <Label>Days: </Label>
          <Text>
            {travelPackage.p_days - 1}N/{travelPackage.p_days}D
          </Text>
        </FieldContainer>
        <FieldContainer>
          <Label>Start Date: </Label>
          <Text>{getShortDate(travelPackage.p_start_date)}</Text>
        </FieldContainer>
        {travelPackage.p_flight && (
          <>
            <hr />
            <h6>Flight - {travelPackage.p_flight.stops[0].airline}</h6>
            <FieldContainer>
              <Label>Departure: </Label>
              <Text>{travelPackage.p_flight.stops[0].departure_time}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Arrival: </Label>
              <Text>{travelPackage.p_flight.stops[0].arrival_time}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Class: </Label>
              <Text>{travelPackage.p_flight.stops[0].planeClass}</Text>
            </FieldContainer>
          </>
        )}
        {travelPackage.p_hotel && (
          <>
            <hr />

            <h6>Hotel Details</h6>
            <FieldContainer>
              <Label>Hotel: </Label>
              <Text>{travelPackage.p_hotel.name}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Address: </Label>
              <Text>{travelPackage.p_hotel.address}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Room Type: </Label>
              <Text>{travelPackage.p_hotel.type}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Transport: </Label>
              <Text>{travelPackage.p_transport.vehicle}</Text>
            </FieldContainer>
          </>
        )}
        <hr />
        <h6>Guests details</h6>
        {travelPackage.p_guests.map((guest) => (
          <FieldContainer>
            <Label>Name (Age): </Label>
            <Text>{guest.name + " (" + guest.age + " yrs)"}</Text>
          </FieldContainer>
        ))}
      </PaymentDetails>
      <PaymentButtonContainer>
        <PaymentButton onClick={onMakePaymentHandler}>
          Proceed to Payment
        </PaymentButton>
      </PaymentButtonContainer>
    </PaymentContainer>
  );
};

export default PaymentSummary;
