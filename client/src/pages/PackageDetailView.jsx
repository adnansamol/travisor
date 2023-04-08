import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { IoIosAirplane } from "react-icons/io";
import { IoLocation, IoLocationSharp } from "react-icons/io5";
import { travel_package } from "../constant/package";
import { getShortDate, getShortTime, priceFormatter } from "../util/formatter";
import { colors } from "../constant/colors";
import { MdFlightClass, MdFlightLand } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import Button from "../components/ui/Button";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router";
const Page = styled.div`
  background-color: whitesmoke;
  width: 100%;
  margin-top: 130px;
`;
const Container = styled.div`
  margin: auto;
  background-color: whitesmoke;
  width: 75%;
`;
const NameContainer = styled.div`
  background-color: ${colors.black};
  padding: 5px 10px;
`;
const PackageName = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
`;
const Days = styled.div`
  width: fit-content;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 0 3px;
  border-radius: 5px;
  background-color: ${colors.teal500};
`;
const Destination = styled.div`
  font-size: 16px;
  color: white;
`;
const ImagesContainer = styled.div`
  display: flex;
`;
const DescriptionContainer = styled.div`
  background-color: ${colors.teal100};
  padding: 20px 30px;
  line-height: 1.5em;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.black};
  margin: 20px 0;
  border: 1px solid ${colors.teal400};
  border-radius: 10px;
`;
const TransportContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const TransportVehicle = styled.div`
  font-weight: 600;
  color: ${colors.black};
  font-size: 18px;
`;
const TransportType = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray};
`;
const VehicleSeats = styled.div`
  font-weight: 500;
  color: ${colors.gray};
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const FlightContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const Plane = styled.div`
  font-weight: 600;
  margin: 3px 2px;
  color: ${colors.gray};
`;
const FlightTimeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;
const HorizontalRule = styled.div`
  border-bottom: 1px solid black;
  width: 29%;
  margin: 0 8px;
`;
const FlightDeparture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlightArrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlightDate = styled.div`
  font-size: 16px;
`;
const FlightTime = styled.div`
  font-weight: 600;
`;
const FlightPlace = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray};
`;
const FlightTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const HotelContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const HotelName = styled.div`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 500;
`;
const HotelAddress = styled.div`
  color: ${colors.gray};
`;
const HotelRooms = styled.div`
  color: ${colors.black};
  font-weight: 500;
`;
const RightContainer = styled.div`
  width: 600px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
  text-align: right;
`;
const Price = styled.div`
  text-align: right;
  font-size: 28px;
`;
const Discount = styled.div``;
const BookingButton = styled(Button)`
  background-color: ${colors.teal500};
  color: ${colors.teal100};
`;
const FlightClass = styled.div``;
const PackageDetailView = () => {
  return (
    <>
      <Header scrollValue={-1} />
      <Page>
        <Container>
          <NameContainer>
            <PackageName>{travel_package.p_name}</PackageName>
            <div
              style={{
                display: "flex",
                margin: "3px 0px",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Destination>
                <IoLocationSharp color="white" />
                {travel_package.p_destination}
              </Destination>
              <Days>
                {travel_package.p_days}N/{travel_package.p_days + 1}D
              </Days>
            </div>
          </NameContainer>
          <ImagesContainer>
            {travel_package.p_images.map((image) => (
              <img src={image} alt="img" width={400} height={200} />
            ))}
          </ImagesContainer>
          <DescriptionContainer>
            {travel_package.p_description}
          </DescriptionContainer>

          <BottomContainer>
            <Sidebar
              links={["Summary", "Policies"]}
              id={travel_package._id}
            ></Sidebar>
            <Outlet />
            <RightContainer>
              <Price>{priceFormatter.format(travel_package.p_price)}</Price>
              <Discount>
                <strong
                  style={{ color: "orange", margin: "0 8px", fontSize: 14 }}
                >
                  -
                  {((25000 * 100) / (travel_package.p_price + 25000)).toFixed(
                    0
                  )}
                  %
                </strong>
                <strike style={{ fontSize: 18 }}>
                  {priceFormatter.format(travel_package.p_price + 25000)}
                </strike>
              </Discount>
              <BookingButton>Proceed to Booking</BookingButton>
            </RightContainer>
          </BottomContainer>
        </Container>
      </Page>
    </>
  );
};

export default PackageDetailView;
