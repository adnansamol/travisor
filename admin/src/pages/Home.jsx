import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: auto;
  width: 60%;
  padding-top: 30px;
`;
const TabLink = styled(Link)`
  display: flex;
  width: 250px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`;
const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
`;
const Prompt = styled.h4`
  text-align: center;
  color: gray;
`;
const Home = () => {
  return (
    <Container>
      <Title>Welcome to the Travisor Admin Dashboard!</Title>
      <Prompt>Here you can manage your customers and your product!</Prompt>
      <hr />
      <TabContainer>
        <TabLink to="allPackages" style={{ color: "orange" }}>
          Active Packages
        </TabLink>
        <TabLink to="/bookings" style={{ color: "seagreen" }}>
          Active Bookings
        </TabLink>
        <TabLink to="/cancelledBookings" style={{ color: "red" }}>
          Cancelled Bookings
        </TabLink>
        <TabLink>Customer Requests</TabLink>
        <TabLink to="/addPackage">Add Package</TabLink>
      </TabContainer>
    </Container>
  );
};

export default Home;
