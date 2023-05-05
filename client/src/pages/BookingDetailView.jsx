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
import { Outlet, useNavigate, useParams } from "react-router";
import { PackageContext } from "../context/package-context";
import MembersForm from "../components/form/MembersForm";
import { addDays } from "../util/date-functions";
import { getTravelPackageByIdAPI } from "../service/travel-package-api";
import CustomerRequestForm from "../components/form/CustomerRequestForm";
import { useRef } from "react";
import Footer from "../components/footer/Footer";
import {
  cancelBookingAPI,
  getBookedPackageByIdAPI,
} from "../service/booking-api";
import BookingSummary from "./BookingSummary";
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
const CancelButton = styled(Button)`
  background-color: ${colors.crimson};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 16px;
  padding: 8px 15px;
`;

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

const BookingDetailView = () => {
  const [imageGallery, setImageGallery] = useState([]);

  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const navigate = useNavigate();
  const galleryWrapperRef = useRef();
  const galleryRef = useRef();
  const params = useParams();

  useEffect(() => {
    fetchTravelPackage();
  }, []);

  const fetchTravelPackage = async () => {
    const data = await getBookedPackageByIdAPI(params.id);
    setTravelPackage(data);
    data.p_images.map((image) =>
      setImageGallery((old) => [...old, { original: image, thumbnail: image }])
    );
  };

  const cancelBookingHandler = async () => {
    if (window.confirm("Are you sure you want to cancel the package?")) {
      await cancelBookingAPI(params.id);
      alert("Booking Cancelled successfully");
      navigate("/profile/myBookings");
    }
  };
  return (
    <>
      <Header isStatic={true} />
      <Page>
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
                <div style={{ color: "white", fontWeight: 600 }}>
                  <p style={{ margin: 2, color: "white" }}>Start Location:</p>
                  {travelPackage.p_start_location}
                </div>
                <div style={{ color: "white", fontWeight: 600 }}>
                  <p style={{ margin: 2, color: "white" }}>Start Date:</p>
                  {getShortDate(travelPackage.p_start_date)}
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
              <BookingSummary travelPackage={travelPackage} />
              <RightContainer>
                <Price>
                  Total Cost:{" "}
                  {priceFormatter.format(
                    (travelPackage.p_price.total_cost -
                      travelPackage.p_price.discount) *
                      travelPackage.p_guests.length
                  )}
                </Price>
                <hr />
                <CancelButton onClick={cancelBookingHandler}>
                  Cancel Boooking
                </CancelButton>
              </RightContainer>
            </BottomContainer>
          </Container>
        )}
      </Page>
      <Footer />
    </>
  );
};

export default BookingDetailView;
