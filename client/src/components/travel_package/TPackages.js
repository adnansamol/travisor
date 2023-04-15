import React from "react";
import styled from "styled-components";
import { bookPackageAPI, makePaymentAPI } from "../../service/booking-api";
import { getUserProfileAPI } from "../../service/user-api";
import Link from "../ui/Link";
import TPackage from "./TPackage";
import { travel_packages } from "../../constant/package";

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
const PackageLink = styled(Link)``;

const TPackages = () => {
  return (
    <Container>
      <Title>Special Holiday Packages</Title>
      <FlexContainer>
        {travel_packages.map((travel_package) => (
          <PackageLink to="/package/1/summary">
            <TPackage travel_package={travel_package} />
          </PackageLink>
        ))}
      </FlexContainer>
    </Container>
  );
};

export default TPackages;
