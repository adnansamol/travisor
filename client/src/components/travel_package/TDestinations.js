import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "../ui/Link";
import { colors } from "../../constant/colors";
import TDestination from "./TDestination";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularDestinations } from "../../constant/destinations";

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
const DestinationLink = styled(Link)`
  display: inline-block;
`;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
};
const TDestinations = ({ title, destinations }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Carousel
        centerMode={false}
        responsive={responsive}
        itemClass="carousel-item-width-0-px"
      >
        {popularDestinations &&
          popularDestinations.map((destination, index) => (
            <DestinationLink to={`/destination/${destination.name}`}>
              <TDestination destination={destination} />
            </DestinationLink>
          ))}
      </Carousel>
    </Container>
  );
};

export default TDestinations;
