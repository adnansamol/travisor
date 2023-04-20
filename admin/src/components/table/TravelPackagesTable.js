import React from "react";
import { deleteTravelPackageByIdAPI } from "../../service/package-api";
import TravelPackageRow from "./TravelPackageRow";

const TravelPackagesTable = ({ travelPackages }) => {
  const deleteTravelPackage = async (id) => {
    const response = await deleteTravelPackageByIdAPI(id);
    alert(response);
    window.location.reload();
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Destination</th>
          <th>Days</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {travelPackages &&
          travelPackages.map((travelPackage, index) => (
            <TravelPackageRow
              key={index}
              travelPackage={travelPackage}
              index={index}
              deleteTravelPackage={deleteTravelPackage}
            />
          ))}
      </tbody>
    </table>
  );
};

export default TravelPackagesTable;
