import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { travel_package } from "../../constant/package";
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
const Location = styled.div`
  font-size: 18px;
`;
const Details = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Days = styled.div`
  width: fit-content;
  padding: 2px 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  background-color: ${colors.teal500};
`;
const PriceContainer = styled.div`
  text-align: right;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;
`;
const Price = styled.div`
  font-size: 26px;
  color: ${colors.black};
  font-weight: 600;
`;

const TPackage = () => {
  return (
    <Container>
      <Preview>
        <Image src={travel_package.p_imagePreview} alt="img" />
      </Preview>
      <SubContainer>
        <Title>{travel_package.p_name}</Title>
        <Location>
          Destination: <strong>{travel_package.p_destination}</strong>
        </Location>
        <Details>
          <Days>
            {travel_package.p_days}N/{travel_package.p_days + 1}D
          </Days>
          <PriceContainer>
            package starts at:
            <Price>{priceFormatter.format(travel_package.p_price)}</Price>
          </PriceContainer>
        </Details>
      </SubContainer>
    </Container>
  );
};

export default TPackage;
