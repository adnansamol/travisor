import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addDays } from "../../util/date-functions";
import Link from "../ui/Link";
import TPackage from "./TPackage";
import { travel_packages } from "../../constant/package";
import { getRecentlyAddedTravelPackagesAPI } from "../../service/travel-package-api";
import { colors } from "../../constant/colors";

const Container = styled.div`
  margin: auto;
  width: 80%;
  margin-bottom: 40px;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 40px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.gray};
  padding-bottom: 15px;
  margin-bottom: 20px;
`;
const PackageLink = styled(Link)``;

const TPackages = ({ title, travelPackages, dateFilter }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlexContainer>
        {travelPackages &&
          travelPackages.map((travelPackage) => (
            <PackageLink to={`/package/${travelPackage._id}/itinerary`}>
              <TPackage travelPackage={travelPackage} />
            </PackageLink>
          ))}
      </FlexContainer>
    </Container>
  );
};

export default TPackages;
