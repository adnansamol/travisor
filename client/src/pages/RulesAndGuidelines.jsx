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
const RulesAndGuidelines = () => {
  return (
    <>
      <Header isStatic={true} />
      <Container>
        <Title>COVID-19 Safety Rules and Guidelines</Title>
        <Content>
          <ul>
            <li>
              COVID-19 Travel Rules and Safety Protocols vary depending on your
              destination, your origin, and the mode of transportation. Here are
              some general guidelines to keep in mind: Check Travel
              Restrictions: Before planning any travel, check the travel
              restrictions and requirements for your destination. Different
              countries and regions may have varying levels of restrictions
              based on the COVID-19 situation, such as quarantine requirements
              or proof of vaccination or negative test results.
            </li>
            <br />
            <li>
              Follow Public Health Guidelines: Regardless of your destination,
              it is essential to follow public health guidelines to help prevent
              the spread of COVID-19. This includes wearing a mask, practicing
              physical distancing, and frequently washing your hands. Get
              Vaccinated: If eligible, get vaccinated before traveling. Vaccines
              have been proven to be highly effective in preventing severe
              COVID-19 symptoms and can reduce the likelihood of spreading the
              virus.
            </li>
            <br />
            <li>
              Get Tested: Depending on your destination, you may be required to
              provide proof of a negative COVID-19 test before entering. Even if
              it is not a requirement, consider getting tested before and after
              travel to help prevent the spread of COVID-19.
            </li>
            <br />
            <li>
              Consider Transportation Options: The safest transportation options
              are those that limit your exposure to others, such as driving your
              own car or renting a private vehicle. If flying, consider choosing
              an airline that has implemented strict safety protocols, such as
              requiring masks and frequent cleaning.
            </li>
            <br />
            <li>
              Plan for Quarantine: If you are traveling internationally or to an
              area with a high incidence of COVID-19, you may be required to
              quarantine upon arrival. Plan ahead and make sure you have the
              necessary resources and accommodations to safely quarantine for
              the required duration.
            </li>
            <br />
            <li>
              Stay Up to Date: The COVID-19 situation is constantly evolving, so
              it is crucial to stay up to date on travel advisories and
              restrictions. Be prepared to adjust your travel plans accordingly
              to protect yourself and others.
            </li>
          </ul>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default RulesAndGuidelines;
