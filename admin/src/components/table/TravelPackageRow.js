import React from "react";

const TravelPackageRow = ({ travelPackage }) => {
  return (
    <tr>
      <td>{travelPackage._id}</td>
      <td>{travelPackage.p_name}</td>
      <td>{travelPackage.p_destination}</td>
      <td>{travelPackage.p_days}</td>
      <td>{travelPackage.p_price}</td>
      <td>Delete, Update</td>
    </tr>
  );
};

export default TravelPackageRow;
