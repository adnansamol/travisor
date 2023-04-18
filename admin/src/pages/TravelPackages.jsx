import React, { useEffect, useState } from "react";
import TravelPackagesTable from "../components/table/TravelPackagesTable";
import { getAgencyProfileAPI } from "../service/agency-api";
import { getAllTravelPackagesAPI } from "../service/package-api";

const TravelPackages = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    getAllPackages();
  }, []);
  const getAllPackages = async () => {
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const response = await getAllTravelPackagesAPI(_id);
    console.log(response[0]);
    setTravelPackages(response);
  };
  return (
    <div>
      <TravelPackagesTable travelPackages={travelPackages} />
    </div>
  );
};

export default TravelPackages;
