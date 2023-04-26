import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
// import { travel_package } from "../../constant/package";
import { priceFormatter } from "../../util/formatter";
import Card from "../card/Card";

const Container = styled(Card)`
  position: relative;
  background-color: white;
  width: 210px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: ${colors.black};
`;
const Preview = styled.div`
  width: inherit;
`;
const Image = styled.img`
  width: inherit;
  height: 300px;
`;
const SubContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 10px;
  z-index: 10;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const TDestination = ({ destination }) => {
  return (
    destination && (
      <Container>
        <Preview>
          <Image src={destination.image} alt="img" />
        </Preview>
        <SubContainer>
          <Title>{destination.name}</Title>
        </SubContainer>
      </Container>
    )
  );
};

export default TDestination;
