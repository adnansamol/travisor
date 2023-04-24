import React, { useContext } from "react";
import styled from "styled-components";
import { PackageContext } from "../../context/package-context";
import Button from "../ui/Button";

const PaymentContainer = styled.div`
  width: 100%;
`;
const PaymentDetails = styled.div``;
const PaymentButtonContainer = styled.div`
  background-color: white;
  border-top: 1px solid;
  width: 100%;
`;
const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.div`
  text-align: right;
`;
const Text = styled.div`
  text-align: left;
`;

const PaymentButton = styled(Button)``;
const PaymentSummary = ({ onMakePaymentHandler }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  return (
    <PaymentContainer>
      <PaymentDetails>
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
      </PaymentDetails>
      <PaymentButtonContainer>
        <PaymentButton onClick={onMakePaymentHandler}>
          Make Payment
        </PaymentButton>
      </PaymentButtonContainer>
    </PaymentContainer>
  );
};

export default PaymentSummary;
