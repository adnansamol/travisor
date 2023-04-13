import React from "react";
import { Outlet } from "react-router-dom";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Body from "../components/main/Body";
import Navbar from "../components/navbar/Navbar";
import TPackage from "../components/travel_package/TPackage";
import TPackages from "../components/travel_package/TPackages";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header scrollValue={20} />
      <Body>
        <Navbar />
        <Jumbotron></Jumbotron>
        <TPackages />
      </Body>
    </>
  );
};

export default Home;
