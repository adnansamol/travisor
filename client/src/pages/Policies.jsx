import React, { useContext } from "react";
import styled from "styled-components";
import { PackageContext } from "../context/package-context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const PoliciesContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const RefundPolicyDescription = styled.div``;
const Policies = () => {
  const { travelPackage } = useContext(PackageContext);
  return (
    <Container>
      <PoliciesContainer>
        <Title>Package Policies</Title>
        <hr />
        <RefundPolicyDescription>
          <h5>Refund Policy</h5>
          The refund policy for every package may differ. Refund policy refers
          to the valid date on or after the package becomes ineligible for a
          refund.
          <br />
          {travelPackage && (
            <div>
              <b>Note: </b>
              {travelPackage.p_policies.cancellation.description}
              The package booking will be not eligible after{" "}
              <b>{travelPackage.p_policies.cancellation.to} days</b> of booking
            </div>
          )}
        </RefundPolicyDescription>
      </PoliciesContainer>
      <PoliciesContainer>
        <h5>Covid-19 Safety Protocols to follow during travel</h5>
        <RefundPolicyDescription>
          <ul>
            <li>
              Advice if you are travelling No matter whether you are taking a
              plane, train, bus, jeepney, ferry, tuk-tuk, ride-hailing taxi,
              truck or car, if you are travelling for the holidays, it is
              essential to keep up preventive measures to protect yourself and
              those around you from COVID-19.
            </li>
            <li>
              Get vaccinated as soon as it is your turn and take all the
              protective measures you can before, during and after travel. Plan
              ahead. Get vaccinated as soon as it is your turn.
            </li>
            <li>
              Learn more about vaccination. Even if you’re fully vaccinated,
              keep up protective measures including keeping at least 1 metre
              away from other passengers when possible, wearing a mask that
              fully covers your nose, mouth and chin, covering your coughs and
              sneezes, and keeping your hands clean. Take extra masks,
              alcohol-based hand sanitizer and disinfectant wipes with you when
              you travel.
            </li>
            <li>
              When possible, open windows in your car, bus or other vehicle to
              increase ventilation. Learn more about ventilation. Follow local,
              national and international health and travel guidelines based on
              where you are travelling. Do not travel if you’re feeling unwell.
            </li>
          </ul>
        </RefundPolicyDescription>
      </PoliciesContainer>
    </Container>
  );
};

export default Policies;
