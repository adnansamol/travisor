import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import styled from "styled-components";
import { colors } from "../../constant/colors";
// import { travel_package } from "../../constant/package";
import { priceFormatter } from "../../util/formatter";
import Card from "../card/Card";

const Container = styled(Card)`
  background-color: white;
  width: 240px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s linear;
  color: ${colors.black};
  &:hover {
    transform: scale(1.01);
  }
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
  font-size: 20px;
  font-weight: 600;
`;
const Location = styled.div`
  font-size: 16px;
  color: ${colors.gray};
  font-weight: 500;
`;
const Details = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Days = styled.div`
  width: fit-content;
  padding: 2px 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  background-color: ${colors.teal500};
  border-radius: 3px;
`;
const PriceContainer = styled.div`
  text-align: right;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;
`;
const Price = styled.div`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 600;
`;
const Discount = styled.div``;
const TPackage = ({ travelPackage }) => {
  return (
    travelPackage && (
      <Container>
        <Preview>
          <Image src={travelPackage.p_imagePreview} alt="img" />
        </Preview>
        <SubContainer>
          <Title>{travelPackage.p_name}</Title>
          <Location>
            <IoLocationSharp />
            {travelPackage.p_destination}
          </Location>
          <Details>
            <Days>
              {travelPackage.p_days - 1}N/{travelPackage.p_days}D
            </Days>
            <PriceContainer>
              <div style={{ fontSize: 14 }}>package starts at:</div>
              <Price>
                {priceFormatter.format(
                  travelPackage.p_price.total_cost -
                    travelPackage.p_price.discount
                )}
              </Price>
              <Discount>
                <strong
                  style={{ color: "orange", margin: "0 8px", fontSize: 12 }}
                >
                  {travelPackage.p_price.percentage}% OFF
                </strong>
                <strike style={{ fontSize: 16, color: colors.gray }}>
                  {priceFormatter.format(travelPackage.p_price.total_cost)}
                </strike>
              </Discount>
            </PriceContainer>
          </Details>
        </SubContainer>
      </Container>
    )
  );
};

export default TPackage;
