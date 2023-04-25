import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Body from "../components/main/Body";
import Navbar from "../components/navbar/Navbar";
import TPackage from "../components/travel_package/TPackage";
import TPackages from "../components/travel_package/TPackages";
import Header from "../components/header/Header";
import {
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
  const [travelHistory, setTravelHistory] = useState([]);
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);

  useEffect(() => {
    fetchUserTravelHistory();
    fetchRecentlyAddedTravelPackages();
    fetchSpecialOfferPackages();
  }, []);

  const fetchRecentlyAddedTravelPackages = async () => {
    const response = await getRecentlyAddedTravelPackagesAPI(
      addDays(new Date(), 30)
    );
    console.log(response);
    setTravelPackages(response);
  };

  const fetchSpecialOfferPackages = async () => {
    const response = await getSpecialOfferPackagesAPI(15);
    setSpecialOfferPackages(response);
  };
  const fetchUserTravelHistory = async () => {
    const { _id } = await getUserProfileAPI(localStorage.getItem("token"));
    const response = await getTravelHistoryByUserIdAPI(_id);
    setTravelHistory(response);
    console.log(response);
  };

  return (
    <>
      <Header scrollValue={20} />
      <Body>
        <Navbar />
        <Jumbotron></Jumbotron>
        <TPackages
          title={"Special Offers"}
          travelPackages={specialOfferPackages}
        />
        <TPackages
          title={"New Travel Packages"}
          travelPackages={travelPackages}
        />

        <TDestinations
          title={"Popular Destinations"}
          destinations={destinations}
        />
      </Body>
      <Footer />
    </>
  );
};

export default Home;
