import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
// import { travel_package } from "../../constant/package";
import { priceFormatter } from "../../util/formatter";
import Card from "../card/Card";

const Container = styled(Card)`
  background-color: white;
  width: 260px;
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
  height: 200px;
`;
const SubContainer = styled.div`
  padding: 0px 10px 15px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
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
