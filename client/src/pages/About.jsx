import React from "react";
import styled from "styled-components";
import { colors } from "../constant/colors";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Container = styled.div`
  background-color: whitesmoke;
  width: 100%;
  min-height: 100vh;
  padding-top: 140px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
`;
const Content = styled.div`
  text-align: justify;
  width: 70%;
  margin: auto;
  font-size: 18px;
`;
const About = () => {
  return (
    <>
      <Header isStatic={true} />
      <Container>
        <Title>About Us</Title>
        <Content>
          <strong>Travisor</strong> is a travel booking platform. It is a
          perfect place for you to begin your wonderful journey safe and
          happily. Travisor Offers great deals for the travellers, to fullfil
          their needs of their next journey. Travisor make sures customer
          satisfaction.
          <br />
          <br />
          We are dedicated to providing our users with a seamless travel booking
          experience that allows them to explore the world without breaking the
          bank. With our user-friendly interface, travelers can easily browse
          and book packages that fit their preferences and budget. Our
          application is designed to offer great deals on travel packages,
          ensuring that our users can find the perfect vacation at a price that
          works for them. We believe that travel should be accessible to
          everyone, and we are committed to making that a reality by offering
          competitive prices and exclusive discounts. At the heart of our
          application is a focus on customer satisfaction.
          <br />
          <br /> We understand that planning a trip can be stressful, which is
          why we strive to make the booking process as easy and enjoyable as
          possible. Our team of travel experts is available to assist our users
          with any questions or concerns they may have, and we are dedicated to
          ensuring that every user has a positive experience with our
          application. Thank you for choosing our travel booking application for
          your next adventure. We look forward to helping you plan the trip of a
          lifetime!
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default About;
