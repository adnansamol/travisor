import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { IoLocationSharp } from "react-icons/io5";
import { travel_packages } from "../constant/package";
import {
  getHtmlDateFormat,
  getShortDate,
  getShortTime,
  priceFormatter,
} from "../util/formatter";
import { colors } from "../constant/colors";
import Modal from "react-modal";
import Button from "../components/ui/Button";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet, useParams } from "react-router";
import { PackageContext } from "../context/package-context";
import MembersForm from "../components/form/MembersForm";
import { addDays } from "../util/date-functions";
const Page = styled.div`
  background-color: whitesmoke;
  width: 100%;
  margin-top: 90px;
`;
const Container = styled.div`
  margin: auto;
  background-color: whitesmoke;
  width: 75%;
`;
const NameContainer = styled.div`
  background-color: ${colors.black};
  padding: 5px 20px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const StartDateInput = styled.input`
  padding: 5px;
  border: 3px solid ${colors.teal500};
  border-radius: 10px;
  color: ${colors.gray};
  font-size: 18px;
  font-weight: 500;
`;
const StartLocationInput = styled.select`
  padding: 5px;
  border: 3px solid ${colors.teal500};
  border-radius: 10px;
  color: ${colors.gray};
  font-size: 18px;
  font-weight: 500;
`;
const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
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
const BottomContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const RightContainer = styled.div`
  width: 400px;
  height: fit-content;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
  text-align: right;
`;
const Price = styled.div`
  text-align: right;
  font-size: 28px;
  font-weight: 500;
`;
const Discount = styled.div``;
const BookingButton = styled(Button)`
  background-color: ${colors.green};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 16px;
  padding: 8px 15px;
`;

const customModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "9rem",
    width: "60%",
    left: "20%",
    height: "29rem",
  },
};

const PackageDetailView = () => {
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const params = useParams();
  useEffect(() => {
    const cacheData = JSON.parse(localStorage.getItem("package-cache"));
    console.log("cacheData", cacheData);
    if (cacheData != null && cacheData._id === params.id) {
      setTravelPackage(cacheData);
    } else {
      setTravelPackage(
        travel_packages.find((value) => value._id === params.id)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("package-cache", JSON.stringify(travelPackage));
  }, [travelPackage]);

  const changeTripDate = (event) => {
    const newStartDate = {
      ...travelPackage,
      p_start_date: new Date(event.target.value),
      p_end_date: addDays(event.target.value, travelPackage.p_days),
    };

    setTravelPackage(newStartDate);
  };

  const closeBookingModal = () => {
    setOpenBookingModal(false);
  };
  return (
    <>
      <Header isStatic={true} />
      <Page>
        <Modal
          isOpen={openBookingModal}
          style={customModalStyles}
          onRequestClose={closeBookingModal}
          shouldCloseOnOverlayClick={true}
        >
          <MembersForm setIsOpen={setOpenBookingModal} />
        </Modal>
        {travelPackage && (
          <Container>
            <NameContainer>
              <div>
                <PackageName>{travelPackage.p_name}</PackageName>
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
                    {travelPackage.p_destination}
                  </Destination>
                  <Days>
                    {travelPackage.p_days}N/{travelPackage.p_days + 1}D
                  </Days>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div>
                  <p style={{ margin: 2, color: "white" }}>Start Location:</p>
                  <StartLocationInput>
                    <option>Ahmedabad</option>
                    <option>New Delhi</option>
                    <option>Mumbai</option>
                  </StartLocationInput>
                </div>
                <div>
                  <p style={{ margin: 2, color: "white" }}>Start Date:</p>
                  <StartDateInput
                    type="date"
                    value={getHtmlDateFormat(travelPackage.p_start_date)}
                    onChange={changeTripDate}
                    min={getHtmlDateFormat(addDays(new Date(), 4))}
                    max={getHtmlDateFormat(addDays(new Date(), 365))}
                  />
                </div>
              </div>
            </NameContainer>
            <ImagesContainer>
              {travelPackage.p_images.map((image) => (
                <img src={image} alt="img" width={400} height={200} />
              ))}
            </ImagesContainer>
            <DescriptionContainer>
              {travelPackage.p_description}
            </DescriptionContainer>

            <BottomContainer>
              <Sidebar
                links={["Summary", "Policies"]}
                id={travelPackage._id}
              ></Sidebar>

              <Outlet />
              <RightContainer>
                <Price>
                  {priceFormatter.format(travelPackage.p_price.base_price)}
                </Price>
                <span
                  style={{ color: colors.gray, lineHeight: 1, fontSize: 14 }}
                >
                  *per person
                </span>
                <Discount>
                  <strong
                    style={{ color: "orange", margin: "0 8px", fontSize: 14 }}
                  >
                    {(
                      (travelPackage.p_price.discount * 100) /
                      (travelPackage.p_price.base_price +
                        travelPackage.p_price.discount)
                    ).toFixed(0)}
                    % OFF
                  </strong>
                  <strike style={{ fontSize: 18, color: colors.gray }}>
                    {priceFormatter.format(
                      travelPackage.p_price.base_price +
                        travelPackage.p_price.discount
                    )}
                  </strike>
                </Discount>
                <hr />
                <BookingButton onClick={() => setOpenBookingModal(true)}>
                  Proceed to Booking
                </BookingButton>
              </RightContainer>
            </BottomContainer>
          </Container>
        )}
      </Page>
    </>
  );
};

export default PackageDetailView;
