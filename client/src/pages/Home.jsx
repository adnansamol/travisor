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
import { getTravelHistoryByUserIdAPI } from "../service/booking-api";
import { getUserProfileAPI } from "../service/user-api";

const Home = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  const [recommendationPackages, setRecommendationPackages] = useState([]);
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
    const { _id } = await getUserProfileAPI(localStorage.getItem("token"));
    if (_id) {
      const response = await getPackageRecommendationsAPI(_id);
      setRecommendationPackages(response);
    }

    setRecommendationPackagesLoading(false);
  };

  return (
    <>
      <Header scrollValue={20} />
      <Body>
        <Navbar />
        <Jumbotron></Jumbotron>
        <div id="packages">
          {recommendationPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : (
            recommendationPackages && (
              <TPackages
                title={"Best places for you"}
                travelPackages={recommendationPackages}
              />
            )
          )}
          {specialOfferPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : (
            <TPackages
              title={
                specialOfferPackages.length > 0 &&
                "Special Offers (Upto " +
                  specialOfferPackages.reduce((value1, value2) =>
                    Math.max(
                      value1.p_price.percentage,
                      value2.p_price.percentage
                    )
                  ) +
                  "% OFF)"
              }
              travelPackages={specialOfferPackages}
            />
          )}
          {travelPackagesLoading ? (
            <>
              <hr />
              <Loading />
            </>
          ) : (
            <TPackages
              title={"Travel this season"}
              travelPackages={travelPackages}
            />
          )}

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
