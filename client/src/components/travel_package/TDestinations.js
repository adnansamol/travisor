import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "../ui/Link";
import { colors } from "../../constant/colors";
import TDestination from "./TDestination";

const Container = styled.div`
  margin: auto;
  width: 80%;
  margin-bottom: 40px;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 25px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.gray};
  padding-bottom: 15px;
  margin-bottom: 20px;
`;
const DestinationLink = styled(Link)``;

const TDestinations = ({ title, destinations }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FlexContainer>
        {destinations &&
          destinations.map(
            (destination, index) =>
              index < 7 && (
                <DestinationLink to={`/destination/${destination.name}`}>
                  <TDestination destination={destination} />
                </DestinationLink>
              )
          )}
      </FlexContainer>
    </Container>
  );
};

export default TDestinations;
