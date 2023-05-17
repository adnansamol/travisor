import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Body from "../components/main/Body";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/ui/Loading";
import TPackages from "../components/travel_package/TPackages";
import Header from "../components/header/Header";
import {
  getPackageRecommendationsAPI,
  getRecentlyAddedTravelPackagesAPI,
  getSpecialOfferPackagesAPI,
} from "../service/travel-package-api";
import { addDays } from "../util/date-functions";
import TDestinations from "../components/travel_package/TDestinations";
import { destinations } from "../constant/destinations";
import Footer from "../components/footer/Footer";
import { getUserProfileAPI } from "../service/user-api";
import styled from "styled-components";
import { ImEarth } from "react-icons/im";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "../components/travel_package/react-carousel.css";
const Moto = styled.div`
  font-size: 70px;
  color: white;
  text-align: center;
  padding-top: 30%;
  font-family: "Alatsi", san-serif;
`;

const AdBanner = styled.img`
  display: block;
  width: 1000px;
  margin: auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;
const AdPoster = styled.img`
  display: block;
  width: 180px;
  margin: auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};
const gridResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
};
const Home = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  const [recommendationPackages, setRecommendationPackages] = useState();
  const [travelPackagesLoading, setTravelPackagesLoading] = useState(true);

  const [specialOfferPackagesLoading, setSpecialOfferPackagesLoading] =
    useState(true);
  const [recommendationPackagesLoading, setRecommendationPackagesLoading] =
    useState(true);

  useEffect(() => {
    fetchRecommendation();
    fetchRecentlyAddedTravelPackages();
    fetchSpecialOfferPackages();
  }, []);

  const fetchRecentlyAddedTravelPackages = async () => {
    const response = await getRecentlyAddedTravelPackagesAPI(
      addDays(new Date(), 30)
    );
    setTravelPackages(response);
    setTravelPackagesLoading(false);
  };

  const fetchSpecialOfferPackages = async () => {
    const response = await getSpecialOfferPackagesAPI(15);
    setSpecialOfferPackages(response);
    setSpecialOfferPackagesLoading(false);
  };

  const fetchRecommendation = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const { _id } =
        token !== null ? await getUserProfileAPI(token) : undefined;
      if (_id) {
        const response = await getPackageRecommendationsAPI(_id);
        console.log(response);
        setRecommendationPackages(response);
      }
    }

    setRecommendationPackagesLoading(false);
  };

  return (
    <>
      <Header scrollValue={20} />
      <Body>
        <Navbar />
        <Jumbotron>
          <Moto>
            Welcome to travis
            <ImEarth size={40} />r
          </Moto>
        </Jumbotron>
        <div id="packages">
          {recommendationPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : recommendationPackages?.length > 0 ? (
            <TPackages
              title={"Best places for you"}
              travelPackages={recommendationPackages}
            />
          ) : (
            <div></div>
          )}
          <div style={{ marginBottom: 20 }}>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3500}
              keyBoardControl={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "desktop"]}
              dotListClass="custom-dot-list-style"
            >
              <AdBanner src={`/images/banner/ad-1.png`} />
              <AdBanner src={`/images/banner/ad-2.png`} />
              <AdBanner src={`/images/banner/ad-3.png`} />
              <AdBanner src={`/images/banner/ad-4.png`} />
            </Carousel>
          </div>

          {specialOfferPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : (
            specialOfferPackages?.length > 0 && (
              <TPackages
                title={
                  "Special Offers (Upto " +
                  specialOfferPackages.reduce(
                    (prev, value2) => Math.max(prev, value2.p_price.percentage),
                    0
                  ) +
                  "% OFF)"
                }
                travelPackages={specialOfferPackages}
              />
            )
          )}
          {travelPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : (
            travelPackages?.length > 0 && (
              <TPackages
                title={"Travel this season"}
                travelPackages={travelPackages}
              />
            )
          )}
          <div style={{ marginBottom: 20, width: "70%", margin: "auto" }}>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={gridResponsive}
              itemClass="carouselAdItemClass"
              containerClass="carouselAdContainerClass"
              removeArrowOnDeviceType={["tablet", "desktop"]}
            >
              <AdPoster src={`/images/banner/square-ad-1.jpg`} />
              <AdPoster src={`/images/banner/square-ad-2.jpg`} />
              <AdPoster src={`/images/banner/square-ad-3.jpg`} />
              <AdPoster src={`/images/banner/square-ad-4.jpg`} />
            </Carousel>
          </div>
          <TDestinations
            title={"Popular Destinations"}
            destinations={destinations}
          />
        </div>
      </Body>
      <Footer />
    </>
  );
};

export default Home;
