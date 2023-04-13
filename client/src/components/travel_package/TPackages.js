import React from "react";
import styled from "styled-components";
import { bookPackageAPI, makePaymentAPI } from "../../service/booking-api";
import { getUserProfileAPI } from "../../service/user-api";
import TPackage from "./TPackage";

const Container = styled.div`
  margin: auto;
  width: fit-content;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;

  margin-bottom: 25px;
`;

const TPackages = () => {
  const onBookPackage = async () => {
    const user = await getUserProfileAPI(localStorage.getItem("token"));
    console.log(user);
    const data = {
      b_travel_package_id: "640de11134f2230a7a14a2d6",
      b_booked_user_id: user._id.toString(),
      b_booking_status: "booked",
      b_booking_date: Date.now,
      b_booking_cost: 54000,
    };
    const paymentData = {
      _id: "640de11134f2230a7a14a2d6",
      p_name: "Dreamy Mauritius!",
      p_price: 125140,
    };
    const response = await makePaymentAPI(paymentData);
    window.open(response);
  };
  return (
    <Container>
      <Title>Special Holiday Packages</Title>
      <FlexContainer>
        <div onClick={onBookPackage}>
          <TPackage />
        </div>
        <TPackage />
        <TPackage />
        <TPackage />
        <TPackage />
      </FlexContainer>
    </Container>
  );
};

export default TPackages;
