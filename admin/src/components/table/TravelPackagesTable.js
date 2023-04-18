import React from "react";
import TravelPackageRow from "./TravelPackageRow";

const TravelPackagesTable = ({ travelPackages }) => {
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
            />
          ))}
      </tbody>
    </table>
  );
};

export default TravelPackagesTable;
