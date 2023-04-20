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
  width: 65%;
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
  transition: transform 0.25s linear;
  &:hover {
    transform: scale(1.05);
  }
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
        <TabLink
          to="allPackages"
          style={{ color: "orange", border: "1px solid orange" }}
        >
          Active Packages
        </TabLink>
        <TabLink
          to="/bookings"
          style={{ color: "seagreen", border: "1px solid seagreen" }}
        >
          Active Bookings
        </TabLink>
        <TabLink
          to="/cancelledBookings"
          style={{ color: "red", border: "1px solid red" }}
        >
          Cancelled Bookings
        </TabLink>
        <TabLink
          to="/customerRequests"
          style={{ border: "1px solid rgb(5, 99, 193)" }}
        >
          Customer Requests
        </TabLink>
        <TabLink
          to="/addPackage"
          style={{ border: "1px solid rgb(5, 99, 193)" }}
        >
          Add Package
        </TabLink>
      </TabContainer>
    </Container>
  );
};

export default Home;
