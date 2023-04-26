import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { PackageContext } from "../../context/package-context";
import { getShortDate, priceFormatter } from "../../util/formatter";
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
  display: flex;
  background-color: white;
  border-top: 1px solid;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
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
const TotalCost = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.black};
`;
const PaymentButton = styled(Button)`
  background-color: ${colors.dodgerblue};
  color: white;
`;
const PaymentSummary = ({ onMakePaymentHandler }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  useEffect(() => {
    console.log(travelPackage);
  }, []);
  return (
    <PaymentContainer>
      <h3 style={{ textAlign: "center" }}>Payment Details</h3>
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
            </FieldContainer>{" "}
            <FieldContainer>
              <Label>
                <b>Cost</b>:{" "}
              </Label>
              <Text>
                {priceFormatter.format(
                  travelPackage.p_flight.price * travelPackage.p_guests.length
                )}
              </Text>
            </FieldContainer>
          </>
        )}
        {travelPackage.p_return_flight && (
          <>
            <hr />
            <h6>
              Return Flight - {travelPackage.p_return_flight.stops[0].airline}
            </h6>
            <FieldContainer>
              <Label>Departure: </Label>
              <Text>
                {travelPackage.p_return_flight.stops[0].departure_time}
              </Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Arrival: </Label>
              <Text>{travelPackage.p_return_flight.stops[0].arrival_time}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>Class: </Label>
              <Text>{travelPackage.p_return_flight.stops[0].planeClass}</Text>
            </FieldContainer>
            <FieldContainer>
              <Label>
                <b>Cost</b>:{" "}
              </Label>
              <Text>
                {priceFormatter.format(
                  travelPackage.p_return_flight.price *
                    travelPackage.p_guests.length
                )}
              </Text>
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

            {travelPackage.p_transport && (
              <FieldContainer>
                <Label>Transport (Cost): </Label>
                <Text>
                  {travelPackage.p_transport.vehicle} (
                  {priceFormatter.format(travelPackage.p_transport.price)})
                </Text>
              </FieldContainer>
            )}
            <FieldContainer>
              <Label>
                <b>Cost</b>:{" "}
              </Label>
              <Text>
                {priceFormatter.format(travelPackage.p_hotel.price_per_room)}
              </Text>
            </FieldContainer>
          </>
        )}
        <hr />
        {travelPackage.p_days_plan.length > 0 &&
          travelPackage.p_days_plan.map((activity) => {
            return (
              <>
                <FieldContainer>
                  <Label>Activity (Cost): </Label>
                  <Text>
                    {activity.title} ({priceFormatter.format(activity.price)})
                  </Text>
                </FieldContainer>
              </>
            );
          })}
        <hr />
        <h6>Guests details</h6>
        {travelPackage.p_guests.map((guest) => (
          <FieldContainer>
            <Label>Name (Age): </Label>
            <Text>{guest.name + " (" + guest.age + " yrs)"}</Text>
          </FieldContainer>
        ))}
        <br />
      </PaymentDetails>
      <PaymentButtonContainer>
        <TotalCost>
          Total Cost: {priceFormatter.format(travelPackage.p_total_cost)}
        </TotalCost>
        <PaymentButton onClick={onMakePaymentHandler}>
          Proceed to Payment
        </PaymentButton>
      </PaymentButtonContainer>
    </PaymentContainer>
  );
};

export default PaymentSummary;
