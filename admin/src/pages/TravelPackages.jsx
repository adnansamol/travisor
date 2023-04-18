import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TravelPackagesTable from "../components/table/TravelPackagesTable";
import { getAgencyProfileAPI } from "../service/agency-api";
import { getAllTravelPackagesAPI } from "../service/package-api";

const Container = styled.div``;
const TableContainer = styled.div`
  width: 80%;
  margin: auto;
`;
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
    <Container>
      <TableContainer>
        <TravelPackagesTable travelPackages={travelPackages} />
      </TableContainer>
    </Container>
  );
};

export default TravelPackages;
