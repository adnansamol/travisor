import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Body from "../components/main/Body";
import Navbar from "../components/navbar/Navbar";
import TPackage from "../components/travel_package/TPackage";
import TPackages from "../components/travel_package/TPackages";
import Header from "../components/header/Header";
import { getRecentlyAddedTravelPackagesAPI } from "../service/travel-package-api";
import { addDays } from "../util/date-functions";
import TDestinations from "../components/travel_package/TDestinations";
import { destinations } from "../constant/destinations";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    fetchRecentlyAddedTravelPackages();
  }, []);

  const fetchRecentlyAddedTravelPackages = async () => {
    const response = await getRecentlyAddedTravelPackagesAPI(
      addDays(new Date(), 30)
    );
    setTravelPackages(response);
  };
  return (
    <>
      <Header scrollValue={20} />
      <Body>
        <Navbar />
        <Jumbotron></Jumbotron>
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
