import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { IoClose, IoLocationSharp, IoImages } from "react-icons/io5";
import { GoRequestChanges } from "react-icons/go";
import { travel_packages } from "../constant/package";
import ImageGallery from "react-image-gallery";
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
import { getTravelPackageByIdAPI } from "../service/travel-package-api";
import CustomerRequestForm from "../components/form/CustomerRequestForm";
import { useRef } from "react";
import Footer from "../components/footer/Footer";
const Page = styled.div`
  background-color: whitesmoke;
  width: 100%;
  margin-top: 90px;
`;
const Container = styled.div`
  margin: auto;
  background-color: whitesmoke;
  width: 80%;
  padding-bottom: 50px;
`;
const NameContainer = styled.div`
  background-color: ${colors.black};
  padding: 5px 20px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PackageName = styled.div`
  font-size: 30px;
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
const ImageGalleryButton = styled(Button)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  margin: 5px;
  border: 1px solid ${colors.gray};
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
  gap: 25px;
`;

const RightContainer = styled.div`
  width: 400px;
  height: fit-content;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
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

const customMembersModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "6.5rem",
    width: "60%",
    left: "20%",
    height: "32rem",
  },
};

const CustomerRequestButton = styled.div`
  position: fixed;
  top: 60%;
  left: calc(100% - 90px);
  background-color: orangered;
  color: white;
  padding: 8px;
  width: 100px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: width 0.2s linear, left 0.2s linear;

  &:hover {
    left: calc(100% - 100px);
    width: 105px;
  }
`;

const requestModalCustomStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "8rem",
    width: "40%",
    left: "30%",
    height: "40rem",
    backgroundColor: "orangered",
  },
};

const ImageGalleryWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.95);
  overflow-x: hidden;
`;

const GalleryCloseButton = styled.div`
  cursor: pointer;
  z-index: 30;
  position: absolute;
  color: white;
  top: 10px;
  left: 95%;
`;

const PackageDetailView = () => {
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [imageGallery, setImageGallery] = useState([]);

  const { travelPackage, setTravelPackage } = useContext(PackageContext);

  const galleryWrapperRef = useRef();
  const galleryRef = useRef();
  const params = useParams();

  useEffect(() => {
    fetchTravelPackage();
  }, []);

  useEffect(() => {
    localStorage.setItem("package-cache", JSON.stringify(travelPackage));
  }, [travelPackage]);

  const fetchTravelPackage = async () => {
    const cacheData = JSON.parse(localStorage.getItem("package-cache"));
    if (
      cacheData != "undefined" &&
      cacheData != null &&
      cacheData._id === params.id
    ) {
      setTravelPackage(cacheData);

      cacheData.p_images.map((image) =>
        setImageGallery((old) => [
          ...old,
          { original: image, thumbnail: image },
        ])
      );
    } else {
      const data = await getTravelPackageByIdAPI(params.id);
      data["all_activities"] = data.p_days_plan;
      setTravelPackage(data);

      data.p_images.map((image) =>
        setImageGallery((old) => [
          ...old,
          { original: image, thumbnail: image },
        ])
      );
    }
  };
  const changeTripDate = (event) => {
    const newStartDate = {
      ...travelPackage,
      p_start_date: new Date(event.target.value),
      p_end_date: addDays(event.target.value, travelPackage.p_days),
    };

    setTravelPackage(newStartDate);
  };
  const changeStartLocation = (event) => {
    const newStartLocation = {
      ...travelPackage,
      p_start_location: event.target.value,
    };

    setTravelPackage(newStartLocation);
  };
  const closeBookingModal = () => {
    setOpenBookingModal(false);
  };
  const closeRequestModal = () => {
    setOpenRequestModal(false);
  };
  return (
    <>
      <Header isStatic={true} />
      <Page>
        <CustomerRequestButton onClick={() => setOpenRequestModal(true)}>
          <GoRequestChanges size={30} />
          <br />
          Customize
          <br />
          Package
        </CustomerRequestButton>
        <Modal
          isOpen={openRequestModal}
          style={requestModalCustomStyle}
          onRequestClose={closeRequestModal}
          shouldCloseOnOverlayClick={true}
        >
          <IoClose
            size={30}
            color="white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpenRequestModal(false);
            }}
          />
          <h3 style={{ color: "white", textAlign: "center" }}>
            Request Customization
          </h3>
          {travelPackage && (
            <CustomerRequestForm
              agencyId={travelPackage.p_agency_id}
              modal={setOpenRequestModal}
            />
          )}
        </Modal>
        <Modal
          isOpen={openBookingModal}
          style={customMembersModalStyles}
          onRequestClose={closeBookingModal}
          shouldCloseOnOverlayClick={true}
        >
          <MembersForm setIsOpen={setOpenBookingModal} />
        </Modal>
        <ImageGalleryWrapper ref={galleryWrapperRef}>
          <GalleryCloseButton
            onClick={() => (galleryWrapperRef.current.style.display = "none")}
          >
            <IoClose size={50} />
          </GalleryCloseButton>
          {imageGallery.length > 0 && (
            <ImageGallery
              showPlayButton={false}
              ref={galleryRef}
              items={imageGallery}
            />
          )}
        </ImageGalleryWrapper>
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
                    {travelPackage.p_days - 1}N/{travelPackage.p_days}D
                  </Days>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div>
                  <p style={{ margin: 2, color: "white" }}>Start Location:</p>
                  <StartLocationInput
                    onChange={changeStartLocation}
                    defaultValue={travelPackage.p_start_location}
                  >
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Mumbai">Mumbai</option>
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
              <ImageGalleryButton
                onClick={() => {
                  galleryWrapperRef.current.style.display = "block";
                }}
              >
                Image Gallery <IoImages size={20} />
              </ImageGalleryButton>

              {travelPackage.p_images.map(
                (image, index) =>
                  index < 3 && (
                    <img
                      src={image}
                      alt="img"
                      style={{ flex: "50%" }}
                      height={200}
                    />
                  )
              )}
            </ImagesContainer>
            <DescriptionContainer>
              {travelPackage.p_description}
            </DescriptionContainer>

            <BottomContainer>
              <Sidebar
                links={["Itinerary", "Policies", "Summary"]}
                id={travelPackage._id}
              ></Sidebar>

              <Outlet />
              <RightContainer>
                <Price>
                  {priceFormatter.format(
                    travelPackage.p_price.total_cost -
                      travelPackage.p_price.discount
                  )}
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
                    {travelPackage.p_price.percentage}% OFF
                  </strong>
                  <strike style={{ fontSize: 18, color: colors.gray }}>
                    {priceFormatter.format(travelPackage.p_price.total_cost)}
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
      <Footer />
    </>
  );
};

export default PackageDetailView;
