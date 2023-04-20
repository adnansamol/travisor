import React from "react";
import { Link } from "react-router-dom";

const CustomerRequestRow = ({ cusomterRequest, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{cusomterRequest.c_name}</td>
      <td>{cusomterRequest.c_email}</td>
      <td>{cusomterRequest.c_phone}</td>
      <td>{cusomterRequest.c_country}</td>
      <td>
        <Link
          className="btn btn-info"
          to={"/customerRequest/" + cusomterRequest._id}
        >
          View Message
        </Link>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
  );
};

export default CustomerRequestRow;
