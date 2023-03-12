import React from "react";
import { Outlet } from "react-router-dom";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Body from "../components/main/Body";
import TPackage from "../components/travel_package/TPackage";
import TPackages from "../components/travel_package/TPackages";

const Home = () => {
  return (
    <Body>
      <Jumbotron></Jumbotron>
      <TPackages />
    </Body>
  );
};

export default Home;
