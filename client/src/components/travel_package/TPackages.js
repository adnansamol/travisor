import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "../ui/Link";
import TPackage from "./TPackage";
import "./react-carousel.css";
import { colors } from "../../constant/colors";
import CustomLeftArrow from "./CustomLeftArrow";

const Container = styled.div`
  margin: auto;
  width: 80%;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.gray};
  padding-bottom: 15px;
  margin-bottom: 20px;
`;
const PackageLink = styled(Link)`
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
    items: 4,
  },
};
const TPackages = ({ title, travelPackages, dateFilter }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Carousel
        responsive={responsive}
        itemClass="carouselItemClass"
        containerClass="carouselContainerClass"
      >
        {travelPackages &&
          travelPackages.map((travelPackage) => (
            <PackageLink to={`/package/${travelPackage._id}/itinerary`}>
              <TPackage travelPackage={travelPackage} />
            </PackageLink>
          ))}
      </Carousel>
    </Container>
  );
};

export default TPackages;
