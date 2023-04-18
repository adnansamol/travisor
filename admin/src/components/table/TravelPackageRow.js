import React from "react";
import { Link } from "react-router-dom";

const TravelPackageRow = ({ travelPackage, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{travelPackage.p_name}</td>
      <td>{travelPackage.p_destination}</td>
      <td>{travelPackage.p_days}</td>
      <td>{travelPackage.p_price.base_price}</td>
      <td>
        <Link className="btn btn-warning" to={"/package/" + travelPackage._id}>
          View
        </Link>
        <button
          className="btn btn-danger mx-2"
          to={"/package/" + travelPackage._id}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TravelPackageRow;
