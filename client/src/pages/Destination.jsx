import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";
import TPackages from "../components/travel_package/TPackages";
import { colors } from "../constant/colors";
import { destinations } from "../constant/destinations";
import { getTravelPackagesByDestinationAPI } from "../service/travel-package-api";
import { addDays } from "../util/date-functions";
import { getHtmlDateFormat, getShortDate } from "../util/formatter";

const Container = styled.div`
  margin-top: 90px;
`;
const ThumbnailContainer = styled.div``;
const Thumbnail = styled.div`
  position: relative;
  background-color: ${colors.teal500};
  width: 100%;
  height: 250px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 10px 40px;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.7);
`;
const DestinationName = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 600;
`;
const StartDateInput = styled.input`
  padding: 5px;
  border: 3px solid ${colors.teal500};
  border-radius: 10px;
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 500;
`;
const Destination = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [filteredTravelPackages, setFilteredTravelPackages] = useState([]);
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchRecentlyAddedTravelPackages();
  }, []);
  useEffect(() => {
    if (travelPackages.length > 0 && dateFilter == "") {
      setFilteredTravelPackages(travelPackages);
    } else {
      setFilteredTravelPackages(
        travelPackages.filter(
          (travelPackage) =>
            getShortDate(travelPackage.p_start_date) ===
            getShortDate(dateFilter)
        )
      );
    }
  }, [dateFilter]);

  const fetchRecentlyAddedTravelPackages = async () => {
    if (destinations.some((value) => value.name == params.name)) {
      const response = await getTravelPackagesByDestinationAPI(params.name);
      setTravelPackages(response);
      setFilteredTravelPackages(response);
    }
  };
  const changeTripDate = (event) => {
    setDateFilter(event.target.value);
  };
  const params = useParams();

  return (
    <>
      <Header isStatic={true} />
      <Container>
        {travelPackages.length > 0 ? (
          <>
            <ThumbnailContainer>
              <Thumbnail>
                <FilterContainer>
                  <DestinationName>
                    {params.name} ({travelPackages.length})
                  </DestinationName>
                  <div>
                    <p style={{ margin: 2, color: "white", fontSize: 14 }}>
                      Start Date:
                    </p>
                    <StartDateInput
                      type="date"
                      onChange={changeTripDate}
                      min={getHtmlDateFormat(addDays(new Date(), 4))}
                      max={getHtmlDateFormat(addDays(new Date(), 365))}
                    />
                  </div>
                </FilterContainer>
              </Thumbnail>
            </ThumbnailContainer>
            <TPackages
              title={"Best deals"}
              travelPackages={filteredTravelPackages}
              dateFilter={dateFilter}
            />
          </>
        ) : (
          <h1 style={{ textAlign: "center", marginTop: 150 }}>
            No package found...
          </h1>
        )}
      </Container>
    </>
  );
};

export default Destination;
