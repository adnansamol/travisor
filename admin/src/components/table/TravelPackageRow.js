import React from "react";
import { Link } from "react-router-dom";

const TravelPackageRow = ({ travelPackage, deleteTravelPackage, index }) => {
  const deleteTravelPackageHandler = () => {
    if (window.confirm("This package will be deleted permanently!")) {
      deleteTravelPackage(travelPackage._id);
    }
  };
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
        <Link
          className="btn btn-info mx-2"
          to={"/updatePackage/" + travelPackage._id}
        >
          Update
        </Link>

        <button className="btn btn-danger" onClick={deleteTravelPackageHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TravelPackageRow;
