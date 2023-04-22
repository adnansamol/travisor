import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addDays } from "../../util/date-functions";
import Link from "../ui/Link";
import TPackage from "./TPackage";
import { travel_packages } from "../../constant/package";
import { getRecentlyAddedTravelPackagesAPI } from "../../service/travel-package-api";

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
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    fetchRecentlyAddedTravelPackages();
  }, []);

  const fetchRecentlyAddedTravelPackages = async () => {
    const response = await getRecentlyAddedTravelPackagesAPI(
      addDays(new Date(), 30)
    );
    setTravelPackages(response);
  };

  return (
    <Container>
      <Title>Special Holiday Packages</Title>
      <FlexContainer>
        {travelPackages.map((travelPackage) => (
          <PackageLink to={`/package/${travelPackage._id}/summary`}>
            <TPackage travelPackage={travelPackage} />
          </PackageLink>
        ))}
      </FlexContainer>
    </Container>
  );
};

export default TPackages;
